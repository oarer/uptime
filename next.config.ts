import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {},
  },
  async rewrites() {
    return [
      {
        source: '/@me/:path*',
        destination: '/me/:path*',
      },
    ]
  },
  async redirects() {
    return [
      { source: '/me', destination: '/me/server-access', permanent: true },
      { source: '/@me', destination: '/me/server-access', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.content-time.pro',
        pathname: '/**',
      },
    ],
  },
} 

export default nextConfig
