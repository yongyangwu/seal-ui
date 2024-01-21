import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  resolve: {
    extensions: [".js", ".ts", ".vue"],
  },

  plugins: [vue()],
});
