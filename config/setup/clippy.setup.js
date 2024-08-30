import { vi } from 'vitest';

vi.mock('clippyts', () => {
  return {
    default: {
      load: vi.fn(({ name, successCb }) => {
        const show = vi.fn(() => {});
        const hide = vi.fn(() => {});

        successCb({
          show,
          hide,
          agentName: name,
        });
      }),
    },
  };
});

function removeStyles() {
  const head = document.head;

  if (head) {
    head.innerHTML = '';
  }
}

beforeEach(removeStyles);
afterEach(removeStyles);
