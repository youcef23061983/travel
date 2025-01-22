// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "platform-lookaside.fbsbx.com",
//         port: "",
//         pathname: "/platform/profilepic/**",
//       },
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "drive.google.com",
//         port: "",
//         pathname: "/uc**",
//       },
//     ],
//   },
// };

// export default withNextIntl(nextConfig);
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "ar"], // List of supported languages
    defaultLocale: "en", // Default language
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
        pathname: "/platform/profilepic/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/uc**",
      },
    ],
  },
};

// Combine withNextIntl plugin
module.exports = createNextIntlPlugin(nextConfig);
