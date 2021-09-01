module.exports = {
  reactStrictMode: true,
  rewrites() {
    return [{source: "/data/:path*", destination: "/api/:path*"}]
  }
}
