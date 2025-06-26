import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['scontent.fbkk28-1.fna.fbcdn.net','res.cloudinary.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};

export default nextConfig;
