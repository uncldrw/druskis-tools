import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["@/assets/css/main.postcss"],
  devtools: { enabled: true },

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },

  icon: {
    mode: "svg",
  },

  modules: ["@nuxt/icon"],
  // supabase: {
  //   redirectOptions: {
  //     login: "/login",
  //     callback: "/confirm",
  //     exclude: ["/login", "/test"],
  //   },
  // },
});
