/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || ''

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Export a fully static site for GitHub Pages
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
