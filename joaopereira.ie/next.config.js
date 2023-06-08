/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = { ...(await originalEntry()) };
          entries['./utils/font-display'] = './utils/font-display.js';
          return entries;
        };
      }
  
      return config;
    },
    babel: {
      plugins: ['@next/babel-plugin-font-display'],
    },
  };

module.exports = nextConfig
