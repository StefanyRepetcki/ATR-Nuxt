export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt",
    htmlAttrs: {
      lang: "pt-BR",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // hid é o identificador de cada meta tag
      { hid: "title", name: "title", content: "ATR-Nuxt" },
      {
        hid: "description",
        name: "description",
        content: "Desenvolvendo projetos com Nuxt",
      },

      //       <!-- Primary Meta Tags -->
      // <title>Meta Tags — Preview, Edit and Generate</title>
      // <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
      // <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

      // <!-- Open Graph  -->
      // <meta property="og:type" content="website" />
      // <meta property="og:url" content="https://metatags.io" />
      // <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
      // <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
      // <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

      // <!-- Meta Tags Generated with https://metatags.io -->
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  router: {
    middleware: "auth",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
