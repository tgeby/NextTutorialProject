import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true, // Will remove later
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  }
};

export default nextConfig;
