/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/g5irbagy/staging/**',
      },
    ],
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
