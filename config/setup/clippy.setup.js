import { vi } from 'vitest';

vi.mock('clippyjs', () => {
  return {
    initAgent: vi.fn(async () => ({
      show: vi.fn(),
      hide: vi.fn(),
      dispose: vi.fn(),
    })),
  };
});

vi.mock('clippyjs/agents', () => {
  const loader = {};
  return {
    Bonzi: loader,
    Clippy: loader,
    F1: loader,
    Genie: loader,
    Genius: loader,
    Links: loader,
    Merlin: loader,
    Peedy: loader,
    Rocky: loader,
    Rover: loader,
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
