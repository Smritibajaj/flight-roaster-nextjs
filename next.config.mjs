/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/flights",
        permanent: true, // Set to false if it's a temporary redirect
      },
    ];
  },
};

export default nextConfig;
