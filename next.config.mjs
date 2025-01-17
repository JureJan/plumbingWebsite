/** @type {import('next').NextConfig} */
import pkg from './next-i18next.config.js';
const { i18n } = pkg;

const nextConfig = {
  i18n,
  reactStrictMode: true,
    images: {
      domains: ["upload.wikimedia.org"], // Dodano gostiteljsko ime za slike
    },

  };
  
  export default nextConfig;
  