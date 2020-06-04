module.exports = {
  testMatch: [
    '<rootDir>/../../packages/clippy/**/*.test.js',
    '<rootDir>/../../packages/clippy/**/*.test.jsx',
  ],
  roots: ['<rootDir>/../../'],
  displayName: 'clippy',
  setupFilesAfterEnv: [
    'babel-polyfill',
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/../setup/clippy.setup.js',
  ],
};
