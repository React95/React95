// @react95/core's unit tests only cover plain functions (the event emitter in
// components/shared, the Video source type): the components are tested
// through the stories, in a browser (see packages/core/vitest.config.mjs)
export default {
  test: {
    name: 'core',
    environment: 'node',
    coverage: {
      provider: 'istanbul',
    },
  },
};
