/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled to allow API routes (SSR/Serverless)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  trailingSlash: true,
}

module.exports = nextConfig