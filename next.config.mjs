/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
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
      },
      {
        protocol: 'https',
        hostname: "skillicons.dev",
        pathname: "/**",
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader"
    });
    return config;
  }
};

export default nextConfig;
