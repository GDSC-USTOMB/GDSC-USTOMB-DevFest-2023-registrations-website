/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
    },
  };
  
module.exports = nextConfig

module.exports = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages : ["mongoose"]
    }
}