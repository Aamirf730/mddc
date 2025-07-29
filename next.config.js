/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
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
  // Ensure proper static export for Cloudflare Pages
  assetPrefix: '',
  basePath: '',
  // Disable server-side features
  experimental: {
    // Disable features that don't work with static export
  }
}

module.exports = nextConfig 