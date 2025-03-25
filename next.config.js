/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yully' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/yully' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
