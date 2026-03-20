import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        team: resolve(__dirname, 'team.html'),
        clients: resolve(__dirname, 'clients.html')
      }
    }
  }
});
