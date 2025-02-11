import pkg from './next-i18next.config.js';
const { i18n } = pkg;

const nextConfig = {
  i18n: {
    ...i18n,
    defaultLocale: "sl", // Default to Slovenian
    locales: ["sl", "en", "de"], // Supported languages
    localeDetection: false // ✅ Prevents Next.js invalid config warning
  },
  reactStrictMode: true,
  trailingSlash: true, // Enables clean URLs
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
    formats: ['image/avif', 'image/webp'], // WebP for better performance
  },
  compiler: {
    styledComponents: true, // Improves Styled Components performance
  },
  experimental: {
    optimizeCss: true, // ✅ Minify CSS for better loading speed
  },
};

export default nextConfig;
