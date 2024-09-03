/** @type {import('next').NextConfig} */

const path = require('path');

const redirects = require('./redirects');

const CompressionPlugin = require('compression-webpack-plugin');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
  buildExcludes: [/app-build-manifest.json$/], // Exclude problematic files
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 8192,
          minRatio: 0.8,
        })
      );
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].br',
          algorithm: 'brotliCompress',
          test: /\.(js|css|html|svg)$/, 
          compressionOptions: { level: 11 }, 
          threshold: 8192, 
          minRatio: 0.8, 
        })
      );
    }
    return config;
  },
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
  async redirects() {
    return redirects;
  },
};

module.exports = withPWA(nextConfig);