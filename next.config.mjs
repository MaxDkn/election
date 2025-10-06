/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "election";

const nextConfig = {
  reactStrictMode: true,
  output: 'export',         
  basePath: '/election',    
  assetPrefix: '/election/',
};

export default nextConfig;
