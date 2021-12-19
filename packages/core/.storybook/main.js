module.exports = {
  staticDirs: ['../components/GlobalStyle'],
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
  webpackFinal: async config => {
    // replace asset loader with url loader in order to bundle icons into js
    function isAssetLoader(rule) {
      return rule.test.toString().includes('png');
    }

    const assetLoader = config.module.rules.find(isAssetLoader);

    config.module.rules = config.module.rules.filter(
      rule => !isAssetLoader(rule),
    );

    config.module.rules.push({
      test: assetLoader.test,
      loader: 'url-loader',
    });

    return config;
  },
};
