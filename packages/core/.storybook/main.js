module.exports = {
  stories: ['../stories/*.stories.tsx'],
  logLevel: 'debug',
  core: {
    builder: 'webpack5',
  },
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
      },
    },
    '@storybook/addon-storysource',
    'storybook-addon-designs',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
          injectStoryParameters: false,
        },
      },
    },
    './src/theme-changer/register',
  ],
};
