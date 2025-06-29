import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/HagaSpa.github.io',
  assetPrefix: '/HagaSpa.github.io/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
