module.exports = {
  extends: '../../babel.config.js',
  plugins: [
    'transform-modern-regexp',
    [
      'inline-import-data-uri',
      {
        extensions: ['.mp3'],
      },
    ],
  ],
};
