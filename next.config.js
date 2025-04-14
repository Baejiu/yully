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
  basePath: process.env.NODE_ENV === 'production' ? '/yully' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yully' : '',
  trailingSlash: true,
  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/yully' : '',
  },
};

module.exports = nextConfig;
