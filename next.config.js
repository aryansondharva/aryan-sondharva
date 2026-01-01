/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hetref.github.io",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },
};

module.exports = nextConfig;
