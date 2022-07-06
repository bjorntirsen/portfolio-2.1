/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com"],
    },
    pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
