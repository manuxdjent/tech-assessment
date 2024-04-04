module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us'
      }
    ]
  },
  experimental: {
    // Character list page endpoint with limit of 50 items exceed NextJS default threshold, it would be interesting to implement pagination but 'characters' endpoint dont allow it
    largePageDataBytes: 250 * 1000
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/character'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/character/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=300, stale-while-revalidate=59',
          },
        ]
      }
    ]
  }
}
