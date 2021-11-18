module.exports = {
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:3001/'
      }
    ]
  }
}
