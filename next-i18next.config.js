module.exports = {
  i18n: {
    defaultLocale: "sl",
    locales: ["sl", "en", "de"],
    localeDetection: false // ✅ Prevents automatic language switching
  },
  reloadOnPrerender: process.env.NODE_ENV === "development", // ✅ Helps during development
};
