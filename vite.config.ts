/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from /<repo>/, but a custom domain
// (Cloudflare Pages) needs to be served from /. Set GH_PAGES=true only in
// the GitHub Pages deploy workflow.
const base = process.env.GH_PAGES === "true" ? "/rooted/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
