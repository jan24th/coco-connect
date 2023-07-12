const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n/index.js',
)

module.exports = withNextIntl({
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
})
