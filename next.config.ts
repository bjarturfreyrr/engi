import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nýja forsíðan var fyrst á /ny; gamlir hlekkir vísa nú á forsíðuna
  async redirects() {
    return [{ source: "/ny", destination: "/", permanent: true }];
  },
};

export default nextConfig;
