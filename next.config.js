/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./styles/themes/_variables.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  },
  headers: async () => {
    return [
      {
        source: '/(.*)', 
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', 
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;