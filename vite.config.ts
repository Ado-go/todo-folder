import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/todo-folder/",
  server: {
    watch: {
      usePolling: true, // Enable polling for file changes
    },
  },
  plugins: [react()],
});
