/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: 'firebasestorage.googleapis.com'
        }],
        minimumCacheTTL: 1500000,
    },
    compiler: {
        removeConsole: false,
    },
    swcMinify: true
}

export default nextConfig;
