import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/HagaSpa.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/HagaSpa.github.io/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
