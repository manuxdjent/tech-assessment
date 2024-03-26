module.exports = {
  images: {
    env: {
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXT_PUBLIC_PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY
    },
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/character'
      }
    ]
  }
}
