/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repoName = "election";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? `/${repoName}` : "", 
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
