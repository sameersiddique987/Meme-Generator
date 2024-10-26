/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'i.imgflip.com'
            },
            {
                protocol:'https',
                hostname:'image.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
