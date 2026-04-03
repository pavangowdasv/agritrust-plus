import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = getFirestore();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/register", async (req, res) => {
  const { name, email, password, role, phone, address, state, city } = req.body;
  if (!email || !password || !role || !name) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!phone || !address || !state || !city) {
    return res.status(400).json({ error: "Phone, address, state and city are required" });
  }

  try {
    const userRef = db.collection("users").doc(email);
    const doc = await userRef.get();
    if (doc.exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    await userRef.set({ name, email, password, role, phone, address, state, city, createdAt: new Date().toISOString() });
    res.json({ success: true });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const userRef = db.collection("users").doc(email);
    const doc = await userRef.get();

    if (!doc.exists) {
      return res.status(401).json({ error: "User not found. Please register first." });
    }

    const user = doc.data();
    if (user.password !== password || user.role !== role) {
      return res.status(401).json({ error: "Invalid credentials or role." });
    }

    res.json({ success: true, role: user.role, name: user.name });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Database error" });
  }
});

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
- Current language context: ${language || "English"}.`;
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return [];
  }
  return messages
    .filter(
      (message) =>
        typeof message === "object" &&
        message !== null &&
        message.role !== undefined &&
        message.text !== undefined
    )
    .map((message) => ({
      role: message.role === "model" ? "model" : "user",
      text: String(message.text || "").trim(),
    }))
    .filter((message) => message.text.length > 0);
}

function localFallbackReply(userText) {
  const q = userText.toLowerCase();

  // (Fallback conditions)
  if (q.match(/\b(hello|hi|hey|namaste|vanakkam|namaskar)\b/)) return "Hello! 👋 Welcome to **AgriTrust+**. I'm your AI assistant. You can ask me about the platform, farming tips, blockchain in agriculture, or anything else!";
  if (q.match(/\b(what is agritrust|about agritrust|tell me about)\b/)) return "**AgriTrust+** is a decentralized agricultural marketplace...";
  if (q.match(/\b(register|sign up|create account|join)\b/)) return "To register on AgriTrust+:\n1. Click **Login** in the top navigation\n2. Select your role (Producer, Consumer, or Financial Institution)\n3. Click **Proceed** and then **Register here**\n4. Fill in your details — email, phone, address, state & city\n5. Submit and you'll be logged in automatically!";
  if (q.match(/\b(login|sign in|log in)\b/)) return "To log in:\n1. Click **Login** in the top navigation\n2. Select your role (Producer / Consumer / Financial Institution)\n3. Enter your registered email and password\n4. Click **Sign In**";
  
  return `Thank you for your question! 🌿\n\nI'm the **AgriTrust+ Assistant**. While I work best with questions about the platform, I can help you with basic queries. To unlock full AI capabilities, please configure the GEMINI_API_KEY environment variable.`;
}

app.post("/api/chat", async (req, res) => {
  const language = typeof req.body?.language === "string" ? req.body.language : "English";
  const messages = normalizeMessages(req.body?.messages);

  if (messages.length === 0) {
    return res.status(400).json({ code: "EMPTY_MESSAGES", text: "Please send a message first." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const lastUserMessage = messages[messages.length - 1]?.text || "";

  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    return res.json({ text: localFallbackReply(lastUserMessage) });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-2.0-flash",
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
      return res.status(502).json({ code: "EMPTY_AI_RESPONSE", text: "The AI did not return a response. Please try again." });
    }

    return res.json({ text });
  } catch (error) {
    console.error("Gemini API error:", error);
    return res.json({ text: localFallbackReply(lastUserMessage) + "\n\n*(Note: AI service temporarily unavailable — using offline mode)*" });
  }
});

// Export the Express app as a Firebase HTTP Function
export const api = onRequest(app);
