module.exports = {
  images: {
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
