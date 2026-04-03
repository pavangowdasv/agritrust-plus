// Base URL for API calls. 
// Locally, Vite proxies /api to localhost:3000. 
// In production (Option B), this should be your Render backend URL (e.g. https://agritrust-backend.onrender.com)
export const API_BASE = import.meta.env.VITE_API_URL || '';

if (import.meta.env.PROD && !API_BASE) {
  console.warn("AgriTrust+: VITE_API_URL is not set. Backend calls will use relative paths and may fail if not hosted locally.");
}
