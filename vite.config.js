import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');
  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      // Dev-only ElevenLabs proxy: the browser calls /api/elevenlabs/...,
      // Vite forwards it with the API key attached server-side.
      proxy: {
        '/api/elevenlabs': {
          target: 'https://api.elevenlabs.io',
          changeOrigin: true,
          rewrite: p => p.replace(/^\/api\/elevenlabs/, ''),
          headers: { 'xi-api-key': env.VITE_ELEVENLABS_API_KEY || '' }
        }
      }
    }
  };
});
