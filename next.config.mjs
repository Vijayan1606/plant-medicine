/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Ensure compatibility with Next.js 15 App Router
    },
    webpack: (config) => {
      config.resolve.extensions.push('.js', '.jsx'); // Ensure correct file resolution
      return config;
    },
  };
  
  export default nextConfig;
  