export default {
  test: {
    testMatch: [
      '<rootDir>/packages/clippy/**/*.test.js',
      '<rootDir>/packages/clippy/**/*.test.jsx',
    ],
    name: 'clippy',
    setupFiles: [
      '../../config/setup/clippy.setup.js',
    ],
    environment: "happy-dom",
  }
};
