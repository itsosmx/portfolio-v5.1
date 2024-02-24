/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'random.imagecdn.app',
        pathname: "/**"
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
