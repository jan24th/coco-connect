module.exports = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coco-connect-1259017271.cos.ap-guangzhou.myqcloud.com',
        pathname: '/strapi/**',
      },
    ],
  },
}
