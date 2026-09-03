import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // By removing `unoptimized: true` and `output: 'export'`, 
  // Vercel's automatic image optimization engine will now compress 
  // your massive 5MB images into tiny, responsive WebP files.
};

export default nextConfig;