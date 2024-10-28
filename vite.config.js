import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
        table: "/tables.html",
      },
    },
  },
  server: {
    open: "/index.html",
  },
});
