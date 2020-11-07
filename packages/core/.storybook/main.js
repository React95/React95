module.exports = {
  stories: ['../stories/*.stories.tsx'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    './addons/theme-changer/register.js'
  ],
};