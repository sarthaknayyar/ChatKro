import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Set to '/' if your app is deployed at the root domain. Adjust as needed.
  plugins: [react()],
});