/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
};

export default nextConfig;
