module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Christy Moormann | UX Design, Web Design, Front-End Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Christy Moormann is a Senior UX Designer in the Portland, Oregon and Vancouver, Washington area with 8+ years of experience leading the design process from user research and design to code implementation and post-deployment analytics.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nova+Flat|Ubuntu' },
      { 
        rel: 'stylesheet', 
        href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css', 
        integrity: 'sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#e01a4f' },
  plugins: [
    '~/plugins/addCommonFrontMatter',
    '~/plugins/injectContent'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios']
  },
  css: [
    '@/assets/index.scss'
  ]
}

