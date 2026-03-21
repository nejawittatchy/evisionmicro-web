import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        team: resolve(__dirname, 'team.html'),
        clients: resolve(__dirname, 'clients.html'),
        erp: resolve(__dirname, 'erp.html'),
        sfa: resolve(__dirname, 'sfa.html'),
        hris: resolve(__dirname, 'hris.html'),
        pos: resolve(__dirname, 'pos.html')
      }
    }
  }
});
