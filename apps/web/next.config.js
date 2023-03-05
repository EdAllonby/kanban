/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui"],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
