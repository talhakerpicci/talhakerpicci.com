/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      { hostname: "raw.githubusercontent.com" },
      { hostname: "example.com" },
      { hostname: "www.google.com" },
      { hostname: "dummyimage.com" },
    ],
  },
};
