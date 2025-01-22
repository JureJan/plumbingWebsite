/** @type {import('next').NextConfig} */
import pkg from './next-i18next.config.js';
const { i18n } = pkg;

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
