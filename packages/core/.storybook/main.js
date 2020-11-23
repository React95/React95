module.exports = {
  stories: ['../stories/*.stories.tsx'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    './src/theme-changer/register'
  ],
};