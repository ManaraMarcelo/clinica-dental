export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME ?? 'Dental Clinic',
    },
  },

  app: {
    head: {
      title: 'Dental Clinic — Smiles That Slap',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Modern dental care that vibes with your always-on life — pain-free cleanings, in-chair whitening, and next-level smile design.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo-mark.svg' },
      ],
    },
  },

  compatibilityDate: '2024-11-01',
})
