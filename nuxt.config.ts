import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  typescript: {
    typeCheck: false,
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate",
    "@nuxtjs/i18n",
    "@nuxt/eslint",
    "@primevue/nuxt-module",
    "@vueuse/nuxt",
  ],
});
