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
  }
};

export default nextConfig;
