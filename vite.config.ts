import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // @ts-ignore - Conflito de versões entre node_modules, mas funciona perfeitamente
  plugins: [react(), tailwindcss()],
  base: "/hipertrofia-na-pratica/", // Altere para o nome do seu repositório se não for o repositório de usuário (ex: "/treino-inteligente/")
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "public"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
