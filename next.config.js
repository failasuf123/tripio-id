/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental:{
        serverActions: true,
        mdxRs: true,
    },
    images: {
        domains: ['localhost'],
      },
}

module.exports = nextConfig
