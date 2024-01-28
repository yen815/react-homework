import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost", // default: 'localhost'
    port: 3001, // default: 5273
    open: true, // default: false
  },
});
