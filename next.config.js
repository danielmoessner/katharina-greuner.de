/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return config;
  },
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },
};

module.exports = nextConfig;
