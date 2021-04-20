module.exports = {
  extends: '../../babel.config.js',
  plugins: [
    'transform-modern-regexp',
    'babel-plugin-styled-components',
    [
      'inline-import-data-uri',
      {
        extensions: ['.mp3'],
      },
    ],
  ],
  ignore: ['**/*.test.tsx', '**/test', '**/*.d.ts'],
};
