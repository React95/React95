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
      },
    ],
    [
      'inline-import-data-uri',
      {
        extensions: ['.mp3'],
      },
    ],
  ],
  ignore: ['**/*.test.tsx', '**/test', '**/*.d.ts'],
};
