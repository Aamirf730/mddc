/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['mapsdirectionsdriving.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  output: 'export',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  basePath: ''
}

module.exports = nextConfig 