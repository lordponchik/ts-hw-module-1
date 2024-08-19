import { defineConfig } from "vite";

export default defineConfig({
  base: "/ts-hw-module-1/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
