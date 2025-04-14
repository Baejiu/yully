/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  output: 'export',
  basePath: '/yully',
  assetPrefix: '/yully',
  trailingSlash: true,
  publicRuntimeConfig: {
    basePath: '/yully',
  },
};

module.exports = nextConfig;
