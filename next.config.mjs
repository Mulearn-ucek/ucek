/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                "hostname": "drive.google.com",
                "protocol": "https",
            },
            {
                "hostname": "assets.aceternity.com",
                "protocol": "https",
            }
        ]
    }
};

export default nextConfig;
