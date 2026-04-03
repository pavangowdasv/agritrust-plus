import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

dotenv.config({ path: '.env.local' });
dotenv.config();

const DEFAULT_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';
const PORT = Number(process.env.PORT || 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Initialize Firebase Admin (ADC automatically picks up credentials on Firebase/Cloud Run)
if (!admin.apps.length) {
  const serviceAccountEnv = process.env.FIREBASE_SERVICE_ACCOUNT;
  const serviceAccountPath = path.resolve(rootDir, 'serviceAccountKey.json');
  
  let initialized = false;

  // 1. Check for Service Account Key local file (highest priority for local dev)
  try {
    const stats = await fs.stat(serviceAccountPath);
    if (stats.isFile()) {
      const fileContent = await fs.readFile(serviceAccountPath, 'utf-8');
      admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(fileContent))
      });
      console.log('Firebase initialized from serviceAccountKey.json');
      initialized = true;
    }
  } catch (e) {
    // File not found is expected if not provided locally
  }

  // 2. Check for FIREBASE_SERVICE_ACCOUNT env var (used on Render)
  if (!initialized && serviceAccountEnv) {
    try {
      const config = JSON.parse(serviceAccountEnv);
      admin.initializeApp({
        credential: admin.credential.cert(config)
      });
      console.log('Firebase initialized from env var.');
      initialized = true;
    } catch (e) {
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT:', e);
    }
  }

  // 3. Last fallback: Project ID only (requires ADC/GCP environment)
  if (!initialized) {
    admin.initializeApp({
      projectId: 'agri-trust-plus-1819'
    });
    console.log('Firebase initialized with default Project ID.');
  }
}
const db = getFirestore();

function buildSystemInstruction(language) {
  return `You are the AgriTrust Assistant, an AI agent for AgriTrust+. AgriTrust+ is a decentralized agricultural marketplace.

Key features:
- Direct Farm-to-Finance trust.
- Blockchain-verified trade.
- Eliminates middlemen.
- Fair compensation for farmers (Producers).
- Absolute traceability for consumers.
- Secure decentralized technology.
- Integrated financial institutions for credit and insurance.

Your Role:
- Help users understand the platform and its benefits.
- Guide users on how to use the app (e.g., scanning QR codes, checking roles).
- Answer questions about agriculture, blockchain in farming, and supply chain transparency.
- Be friendly, professional, and concise.

Formatting Rules:
- Use Markdown for formatting (bolding key terms, using bullet points for lists).
- Keep responses relatively brief unless the user asks for a detailed explanation.

Language:
- Answer in the user's preferred language if possible, but default to English if unsure.
- Current language context: ${language || 'English'}.`;
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter(
      (message) =>
        typeof message === 'object' &&
        message !== null &&
        message.role !== undefined &&
        message.text !== undefined,
    )
    .map((message) => ({
      role: message.role === 'model' ? 'model' : 'user',
      text: String(message.text || '').trim(),
    }))
    .filter((message) => message.text.length > 0);
}

async function createApp() {
  const app = express();
  const isProduction = process.argv.includes('--production') || process.env.NODE_ENV === 'production';

  app.use(cors());
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });


  app.post('/api/register', async (req, res) => {
    const { name, email, password, role, phone, address, state, city } = req.body;
    if (!email || !password || !role || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!phone || !address || !state || !city) {
      return res.status(400).json({ error: 'Phone, address, state and city are required' });
    }

    try {
      const userRef = db.collection('users').doc(email);
      const doc = await userRef.get();
      if (doc.exists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      await userRef.set({ name, email, password, role, phone, address, state, city, createdAt: new Date().toISOString() });
      res.json({ success: true });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Database error' });
    }
  });

  app.post('/api/login', async (req, res) => {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const userRef = db.collection('users').doc(email);
      const doc = await userRef.get();

      if (!doc.exists) {
        return res.status(401).json({ error: 'User not found. Please register first.' });
      }

      const user = doc.data();
      if (user.password !== password || user.role !== role) {
        return res.status(401).json({ error: 'Invalid credentials or role.' });
      }

      res.json({ success: true, role: user.role, name: user.name });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Database error' });
    }
  });


// ─── Smart local fallback (used when GEMINI_API_KEY is missing) ─────────────
function localFallbackReply(userText) {
  const q = userText.toLowerCase();

  if (q.match(/\b(hello|hi|hey|namaste|vanakkam|namaskar)\b/))
    return 'Hello! 👋 Welcome to **AgriTrust+**. I\'m your AI assistant. You can ask me about the platform, farming tips, blockchain in agriculture, or anything else!';

  if (q.match(/\b(what is agritrust|about agritrust|tell me about)\b/))
    return '**AgriTrust+** is a decentralized agricultural marketplace that connects farmers directly with consumers and financial institutions — eliminating middlemen, ensuring fair prices for producers, and providing complete traceability for buyers through blockchain technology.';

  if (q.match(/\b(register|sign up|create account|join)\b/))
    return 'To register on AgriTrust+:\n1. Click **Login** in the top navigation\n2. Select your role (Producer, Consumer, or Financial Institution)\n3. Click **Proceed** and then **Register here**\n4. Fill in your details — email, phone, address, state & city\n5. Submit and you\'ll be logged in automatically!';

  if (q.match(/\b(login|sign in|log in)\b/))
    return 'To log in:\n1. Click **Login** in the top navigation\n2. Select your role (Producer / Consumer / Financial Institution)\n3. Enter your registered email and password\n4. Click **Sign In**';

  if (q.match(/\b(farmer|producer|sell|crop|harvest|list)\b/))
    return '**For Producers (Farmers):**\n- Register with the "Producer" role\n- List your verified crops on the secure marketplace\n- Receive direct, instant payments to your wallet\n- Access credit from integrated financial institutions based on your trading history';

  if (q.match(/\b(consumer|buyer|buy|purchase|product|trace)\b/))
    return '**For Consumers:**\n- Browse blockchain-verified produce from verified farmers\n- Scan QR codes to trace the complete journey of any product\n- Purchase directly from the source with zero intermediary fees\n- Guaranteed quality and authenticity for every order';

  if (q.match(/\b(bank|finance|loan|credit|insurance|institution)\b/))
    return '**For Financial Institutions:**\n- Access verified, immutable farmer transaction histories\n- Evaluate loan applications backed by smart contract data\n- Issue credit and insurance with minimal risk\n- Monitor repayment rates on the live institutional dashboard';

  if (q.match(/\b(blockchain|decentralized|smart contract|ledger)\b/))
    return '**Blockchain in AgriTrust+:**\nEvery transaction is permanently recorded on a distributed ledger — making it immutable, transparent, and verifiable by all parties. This eliminates fraud, ensures fair pricing, and creates a complete audit trail from farm to consumer.';

  if (q.match(/\b(qr|scan|verify|authenticity|origin)\b/))
    return 'Use the **QR Scanner** feature on AgriTrust+ to instantly verify any product\'s:\n- 🌾 Farm of origin\n- 📋 Quality certification\n- 🚚 Supply chain journey\n- ✅ Blockchain verification status\n\nJust click "Verify Asset" in the Consumer dashboard.';

  if (q.match(/\b(payment|transfer|money|wallet|remittance)\b/))
    return 'AgriTrust+ uses **automated smart contracts** for payments:\n- Payments are triggered instantly when a transaction is confirmed\n- Funds go directly to the farmer\'s wallet — no delays, no middlemen\n- Full payment history is recorded on the blockchain for transparency';

  if (q.match(/\b(language|hindi|tamil|telugu|kannada|marathi|bengali|gujarati|punjabi|malayalam)\b/))
    return 'AgriTrust+ supports **12 Indian languages**:\nEnglish, Hindi, Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Kannada, Malayalam, Punjabi, and Odia.\n\nSelect your preferred language from the **Languages** dropdown in the top navigation bar.';

  if (q.match(/\b(contact|support|help|email|phone)\b/))
    return '**Contact AgriTrust+ Support:**\n- 📧 Email: support@agritrust.com\n- 📞 Phone: +91 80456 78900\n- 💬 Or keep chatting — I\'m here 24/7!';

  if (q.match(/\b(price|fee|cost|charge|free)\b/))
    return 'AgriTrust+ charges **0% intermediary fees** — farmers and consumers transact directly. Platform sustainability is maintained through a minimal, transparent smart-contract processing fee that is far lower than traditional market commissions.';

  if (q.match(/\b(security|safe|secure|privacy|data)\b/))
    return '**Security on AgriTrust+:**\n- All personal data is encrypted and kept off-chain\n- Transactions are recorded on an immutable blockchain\n- Smart contracts enforce rules automatically — no human interference\n- Compliant with Indian data protection standards';

  if (q.match(/\b(how|work|ecosystem|process|step)\b/))
    return '**How AgriTrust+ Works:**\n1. 🌾 Farmers list certified inventory on the blockchain ledger\n2. 🛒 Consumers browse verified, traceable produce\n3. 🤝 Direct P2P transactions — no middlemen\n4. 📋 Every step recorded on the blockchain\n5. 💳 Instant payment to farmer\'s wallet\n6. 🏦 Financial institutions provide credit based on verified data';

  if (q.match(/\b(thank|thanks|great|awesome|perfect|good)\b/))
    return 'You\'re welcome! 😊 Is there anything else I can help you with about AgriTrust+?';

  if (q.match(/\b(bye|goodbye|exit|close)\b/))
    return 'Goodbye! 👋 Come back anytime you need help with AgriTrust+. Happy farming! 🌾';

  // General fallback
  return `Thank you for your question! 🌿

I'm the **AgriTrust+ Assistant**. While I work best with questions about:\n- 🌾 The AgriTrust platform & features\n- 👩‍🌾 Farmer / Consumer / Bank workflows\n- 🔗 Blockchain & traceability\n- 📱 Registration & login help\n- 💰 Payments & security\n\nTo unlock my full AI capabilities (including answering any general question), please add a **Gemini API key** to the \`.env.local\` file and restart the server.\n\nGet your free key at: **https://aistudio.google.com/apikey**`;
}

  app.post('/api/chat', async (req, res) => {
    const language = typeof req.body?.language === 'string' ? req.body.language : 'English';
    const messages = normalizeMessages(req.body?.messages);

    if (messages.length === 0) {
      return res.status(400).json({ code: 'EMPTY_MESSAGES', text: 'Please send a message first.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const lastUserMessage = messages[messages.length - 1]?.text || '';

    // ── No API key → smart local fallback ───────────────────────────────────
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      const reply = localFallbackReply(lastUserMessage);
      return res.json({ text: reply });
    }

    // ── API key present → call Gemini ────────────────────────────────────────
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL || 'gemini-2.0-flash',
        contents: messages.map((message) => ({
          role: message.role,
          parts: [{ text: message.text }],
        })),
        config: {
          systemInstruction: buildSystemInstruction(language),
        },
      });

      const text = response.text?.trim();
      if (!text) {
        return res.status(502).json({ code: 'EMPTY_AI_RESPONSE', text: 'The AI did not return a response. Please try again.' });
      }

      return res.json({ text });
    } catch (error) {
      console.error('Gemini API error:', error);
      // If Gemini fails, fall back to local rather than showing an error
      const reply = localFallbackReply(lastUserMessage);
      return res.json({ text: reply + '\n\n*(Note: AI service temporarily unavailable — using offline mode)*' });
    }
  });

  if (isProduction) {
    app.use(express.static(path.resolve(rootDir, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(rootDir, 'dist', 'index.html'));
    });
    return app;
  }

  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    root: rootDir,
    appType: 'custom',
    server: {
      middlewareMode: true,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template = await fs.readFile(path.resolve(rootDir, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (error) {
      vite.ssrFixStacktrace(error);
      next(error);
    }
  });

  return app;
}

createApp()
  .then(async (app) => {
    app.listen(PORT, () => {
      console.log(`AgriTrust server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start AgriTrust server:', error);
    process.exit(1);
  });
