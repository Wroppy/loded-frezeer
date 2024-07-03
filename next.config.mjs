/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
};

export default nextConfig;
