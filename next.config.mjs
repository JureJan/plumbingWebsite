/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["upload.wikimedia.org"], // Dodano gostiteljsko ime za slike
    },
    i18n: {
      locales: ['en', 'de', 'it', 'sl'],
      defaultLocale: 'en',
    }
  };
  
  export default nextConfig;
  