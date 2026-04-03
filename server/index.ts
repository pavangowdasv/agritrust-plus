import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dotenv from 'dotenv';
import express from 'express';
import { GoogleGenAI } from '@google/genai';

dotenv.config({ path: '.env.local' });
dotenv.config();

type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};

const DEFAULT_MODEL = process.env.GEMINI_MODEL || 'gemini-3-flash-preview';
const PORT = Number(process.env.PORT || 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function buildSystemInstruction(language: string) {
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

function normalizeMessages(messages: unknown): ChatMessage[] {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter(
      (message): message is ChatMessage =>
        typeof message === 'object' &&
        message !== null &&
        (message as ChatMessage).role !== undefined &&
        (message as ChatMessage).text !== undefined,
    )
    .map((message): ChatMessage => ({
      role: message.role === 'model' ? 'model' : 'user',
      text: String(message.text || '').trim(),
    }))
    .filter((message) => message.text.length > 0);
}

async function createApp() {
  const app = express();
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.post('/api/chat', async (req, res) => {
    try {
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({
          code: 'API_KEY_MISSING',
          text: 'The AI assistant is not configured on the server.',
        });
      }

      const language = typeof req.body?.language === 'string' ? req.body.language : 'English';
      const messages = normalizeMessages(req.body?.messages);

      if (messages.length === 0) {
        return res.status(400).json({
          code: 'EMPTY_MESSAGES',
          text: 'Please send a message before starting the chat.',
        });
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: DEFAULT_MODEL,
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
        return res.status(502).json({
          code: 'EMPTY_AI_RESPONSE',
          text: 'The AI assistant did not return a response.',
        });
      }

      return res.json({ text });
    } catch (error) {
      console.error('AI chat request failed:', error);
      return res.status(502).json({
        code: 'AI_UNAVAILABLE',
        text: 'The AI assistant is temporarily unavailable.',
      });
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
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  return app;
}

createApp()
  .then((app) => {
    app.listen(PORT, () => {
      console.log(`AgriTrust server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to start AgriTrust server:', error);
    process.exit(1);
  });
