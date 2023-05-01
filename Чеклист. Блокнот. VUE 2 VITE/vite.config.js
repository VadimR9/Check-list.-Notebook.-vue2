import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // server: {
  //   port: 3030,
  // },

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @import "@/assets/styles/_variables.scss";
  //         @import "@/assets/styles/_animations.scss";
  //         @import "@/assets/styles/_fonts.scss";
  //         @import "@/assets/styles/_icomoon.scss";
  //       `,
  //     },
  //   },
  // },
});
