/** @type {import('next').NextConfig} */
const nextConfig = {
    // Force Next.js to include the downloads folder in the standalone build (important for Vercel)
    output: 'standalone',
};

export default nextConfig;
