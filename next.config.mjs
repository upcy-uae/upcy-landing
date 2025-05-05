// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        hostname: "plus.unsplash.com",
        //in my case i used cdn.pixabay.com
      },
    ],
  },
};

export default withNextIntl(nextConfig);
