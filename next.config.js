/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
