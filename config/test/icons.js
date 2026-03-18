export default {
  test: {
    name: 'icons',
    globals: true,
    setupFiles: ['@testing-library/jest-dom'],
    environment: 'happy-dom',
    coverage: {
      all: false,
      provider: 'istanbul',
    },
  },
};
