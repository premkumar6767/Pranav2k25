import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct asset resolution on Netlify
  build: {
    outDir: "dist",
    sourcemap: true, // Helps debug missing files
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
