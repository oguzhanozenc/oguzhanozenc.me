/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return ["/projects/:path*", "/journey", "/resume", "/contact", "/about"].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }));
  },
};

module.exports = nextConfig;
