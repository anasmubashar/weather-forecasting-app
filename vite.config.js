// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Define the root of your project
  base: "./", // Set base path for assets and links
  server: {
    port: 3000, // Define the port for the development server
    open: true, // Automatically open the browser when the server starts
  },
  build: {
    outDir: "dist", // Output directory for the build files
    rollupOptions: {
      input: {
        main: "./index.html", // Entry point for the build
        tables: "./tables.html", // Add more entry points if needed
      },
    },
  },
});
