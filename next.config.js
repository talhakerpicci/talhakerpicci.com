/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "raw.githubusercontent.com" },
      { hostname: "www.google.com" },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
