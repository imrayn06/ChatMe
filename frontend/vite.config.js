import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: process.env.VITE_BACKEND_URL || "http://127.0.0.1:5000",
    watch: {
      usePolling: true,
    },
    build: {
      outDir: "./dist",
    },
  },
});
