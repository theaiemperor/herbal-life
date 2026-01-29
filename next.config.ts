import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true
  },
  output: 'export',
  devIndicators: {
    position: 'bottom-right'
  },
  basePath: process.env.PAGES_BASE_PATH,

};

export default nextConfig;
