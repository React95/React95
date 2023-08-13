import { vi } from 'vitest';

vi.mock('clippyjs', () => {
  return {
    default: {
      load: vi.fn((agentName, cb) => {
        const show = vi.fn(() => { });
        const hide = vi.fn(() => { });

        cb({ agentName, show, hide });
      })
    }
  }
});
