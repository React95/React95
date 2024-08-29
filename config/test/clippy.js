export default {
  test: {
    testMatch: [
      '<rootDir>/packages/clippy/**/*.test.ts',
      '<rootDir>/packages/clippy/**/*.test.tsx',
    ],
    name: 'clippy',
    globals: true,
    setupFiles: ['../../config/setup/clippy.setup.js'],
    environment: 'happy-dom',
  },
};
