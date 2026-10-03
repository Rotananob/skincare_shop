import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nvkc0qf4v6khayu46icbd.rork.app",
      },
      {
        protocol: "https",
        hostname: "fonts.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
