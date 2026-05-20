import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sustainableprintingco.com.au",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
