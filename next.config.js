/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pdp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
