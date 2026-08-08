import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  turbopack: {
    root: process.cwd()
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/ideas.html", destination: "/#mission", permanent: true },
      { source: "/teams.html", destination: "/#portfolio", permanent: true },
      { source: "/showcase.html", destination: "/#portfolio", permanent: true },
      { source: "/apply.html", destination: "/apply", permanent: true }
    ];
  }
};

export default nextConfig;
