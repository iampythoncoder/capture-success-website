import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/board", destination: "/about", permanent: true }];
  },
  /* config options here */
};

export default nextConfig;
