import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/og-image",
        destination: "/opengraph-image",
      },
    ];
  },
  // Installed templates fetch their assets (Rive files, images) cross-origin
  // from this site, so the template asset folders must allow it.
  async headers() {
    return ["aether", "aeris", "vitalis", "hero-illustration"].map((dir) => ({
      source: `/${dir}/:path*`,
      headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "pub-f170a2592d2c4a1485466404c36807be.r2.dev",
      },
      {
        protocol: "https",
        hostname: "qclay.design",
      },
      {
        protocol: "https",
        hostname: "www.kairoui.online",
      },
      {
        protocol: "https",
        hostname: "kairoui.online",
      },
    ],
  },
};

export default nextConfig;
