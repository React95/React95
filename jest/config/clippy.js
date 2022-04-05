module.exports = {
  testMatch: [
    '<rootDir>/packages/clippy/**/*.test.js',
    '<rootDir>/packages/clippy/**/*.test.jsx',
  ],
  testPathIgnorePatterns: ['<rootDir>/packages/core'],
  rootDir: './../../',
  displayName: 'clippy',
  name: 'clippy',
  setupFilesAfterEnv: [
    'babel-polyfill',
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/jest/setup/clippy.setup.js',
  ],
  testEnvironment: 'jsdom',
};
