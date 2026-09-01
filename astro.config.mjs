// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// @ts-ignore
const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  site: "https://jonathanmtzgzz.github.io",
  base: isProd ? "/arquitectura-energetica-web" : "/",
});
