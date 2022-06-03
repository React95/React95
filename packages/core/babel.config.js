module.exports = {
  extends: '../../babel.config.js',
  plugins: [
    'transform-modern-regexp',
    [
      'babel-plugin-styled-components',
      {
        topLevelImportPaths: [
          '@xstyled/styled-components',
          '@xstyled/styled-components/no-tags',
          '@xstyled/styled-components/native',
          '@xstyled/styled-components/primitives',
        ],
        minify: false,
      },
    ],
    [
      'inline-import-data-uri',
      {
        extensions: ['.mp3'],
      },
    ],
  ],
};
