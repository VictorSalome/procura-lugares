/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["maps.googleapis.com"],
  },
};

export default nextConfig;
