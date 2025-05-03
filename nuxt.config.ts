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

  runtimeConfig: {
    // Private Schlüssel (nur serverseitig)
    apiSecret: "",

    // Öffentliche Schlüssel (client & server)
    public: {
      weatherApiKey: process.env.WEATHER_API_KEY,
      weatherApiUrl: process.env.WEATHER_API_URL,
    },
  },

  modules: ["@nuxt/icon", "nuxt-swiper"],
  // supabase: {
  //   redirectOptions: {
  //     login: "/login",
  //     callback: "/confirm",
  //     exclude: ["/login", "/test"],
  //   },
  // },
});