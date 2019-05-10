module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Art-Marks',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/safari-pinned-tab.svg'
      },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2b8ed9' },
  /*
  ** Build configuration
  */
  css: [
    {
      src: '~assets/sass/main.sass',
      lang: 'sass'
    }
  ],
  plugins: [
    '~/plugins/vue2-google-maps.js',
    '~/plugins/vue-in-viewport-directive.js',
    '~/plugins/helpers.js',
    { src: '~/plugins/vue-masonry', ssr: false },
    { src: '~/plugins/vue-zoom.js', ssr: false },
    { src: '~/plugins/vue-gallery.js', ssr: false },
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    transpile: [/^vue2-google-maps($|\/)/],
    vendor: [
      'babel-polyfill',
      'vue2-google-maps',
      'vue-in-viewport-directive',
      'vue-masonry',
      'vue-zoom',
      'vue-gallery',
      'helpers'
    ],

    extend (config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}

