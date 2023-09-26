/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "api-production.s3.amazonaws.com",
      "image.tmdb.org",
      "placehold.co",
      "fakeimg.pl",
    ],
  },
};

module.exports = nextConfig;
