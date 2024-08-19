import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5001, // Change this to your desired port number
  },
  build: {
    outDir: './resources/typescript/dist', // This specifies the output directory for the build process
  },
});
