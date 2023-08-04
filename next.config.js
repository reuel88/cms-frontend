/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  productionBrowserSourceMaps: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["localhost", "res.cloudinary.com", "tailwindui.com"],
  },
};

module.exports = nextConfig;
