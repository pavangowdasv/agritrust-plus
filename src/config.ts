// Base URL for API calls. 
// Locally, Vite proxies /api to localhost:3000. 
// In production on Render, you should set VITE_API_URL in your .env file or build settings.
// @ts-ignore
export const API_BASE = import.meta.env.VITE_API_URL || '';
