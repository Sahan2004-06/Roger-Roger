import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite turns our JSX into plain JavaScript the browser understands.
export default defineConfig({
  plugins: [react()],
});
