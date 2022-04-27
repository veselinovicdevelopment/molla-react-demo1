/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "production"
      ? `/react/molla/demo-${process.env.NEXT_PUBLIC_DEMO}`
      : "",
  trailingSlash: true,
  env: {
    PUBLIC_URL:
      process.env.NODE_ENV === "production"
        ? `/react/molla/demo-${process.env.NEXT_PUBLIC_DEMO}/`
        : "/",
    APP_URL:
      process.env.NODE_ENV === "production"
        ? "https://d-themes.com/react/molla/"
        : "http://d-themes.com/react/molla",
    // APP_URL: process.env.NODE_ENV === 'production' ? 'https://d-themes.com/react/molla/' : 'http://localhost/'
  },
};

module.exports = nextConfig;
