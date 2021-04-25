module.exports = {
  extends: '../../babel.config.js',
  ignore: ['**/*.d.ts'],
  plugins: [
    [
      'inline-import-data-uri',
      {
        extensions: ['.png'],
      },
    ],
  ],
};
