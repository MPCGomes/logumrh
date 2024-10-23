import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
  },
  webpack(config) {
    return config;
  },
};

export default nextConfig;
