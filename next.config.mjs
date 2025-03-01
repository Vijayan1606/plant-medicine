/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true, // Ensures App Router compatibility
    },
    webpack: (config) => {
      config.resolve.extensions.push('.js', '.jsx');
      return config;
    },
  };
  
  export default nextConfig;
  