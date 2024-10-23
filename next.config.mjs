/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "utfs.io"
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,  // This disables ESLint during build process
    },
};

export default nextConfig;
