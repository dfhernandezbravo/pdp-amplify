/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const getRemotesEntries = (entry) => {
  switch (entry) {
    case 'ratingsAndReviews':
      return `ratingsAndReviews@${process.env.NEXT_PUBLIC_RATING_AND_REVIEWS_URI}/_next/static`;
    default:
      return null;
  }
};

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  const ratingsAndReviews = `${getRemotesEntries(
    'ratingsAndReviews',
  )}/${location}/remoteEntry.js`;
  return {
    ratingsAndReviews: ratingsAndReviews,
  };
};

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

  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pdp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './pdp': './src/pages/[department]/p',
        },
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
        remotes: remotes(options.isServer),
        shared: {
          'next/link': {
            requiredVersion: false,
            singleton: true,
          },
        },
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
