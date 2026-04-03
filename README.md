<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/a5d0a737-4414-45a1-aa5c-0642672aa94d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key.
3. Run the full app, including the backend chat API:
   `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Production build

1. Build the frontend:
   `npm run build`
2. Start the production server:
   `npm run preview`

The AI assistant now runs through the server at `/api/chat`, which keeps your Gemini API key off the client and avoids browser-side connection failures from the original AI Studio export.
