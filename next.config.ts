import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  agentRules: false,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
