/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // basePath: '/DnD-App',
    // assetPrefix: '/DnD-App',
    images: {
        remotePatterns: [{ hostname: 'cdn.sanity.io' }, { hostname: 'source.unsplash.com' }],
    },
};

module.exports = nextConfig;
