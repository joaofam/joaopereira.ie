// next.config.js
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@chakra-ui/react', '@emotion/react']);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      const originalEntry = config.entry;
    }

    return config;
  },
  babel: {
    plugins: ['@next/babel-plugin-font-display'],
  },
};

module.exports = withPlugins([withTM], nextConfig);
