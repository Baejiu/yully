/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yully' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/yully' : '',
};

module.exports = nextConfig;
