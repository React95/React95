jest.mock('clippyjs', () => ({
  load: jest.fn((agentName, cb) => {
    const show = jest.fn(() => {});
    const hide = jest.fn(() => {});

    cb({ agentName, show, hide });
  }),
}));
