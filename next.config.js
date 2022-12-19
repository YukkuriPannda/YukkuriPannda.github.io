/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/yukkuripannda.github.io",
  trailingSlash: true,
};

module.exports = nextConfig
