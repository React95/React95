export default {
  test: {
    name: 'icons',
    globals: true,
    setupFiles: ['@testing-library/jest-dom/vitest'],
    environment: 'happy-dom',
    coverage: {
      all: false,
      provider: 'istanbul',
    },
  },
};
