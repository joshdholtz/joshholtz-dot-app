import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: isProd ? 'export' : undefined,
  allowedDevOrigins: ['100.107.36.52'],
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
