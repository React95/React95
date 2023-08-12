import { beforeAll, vi } from 'vitest';

vi.mock('icojs', () => ({
  isICO: vi.fn(() => true),
  parse: vi.fn(() =>
    Promise.resolve([
      {
        width: 16,
        buffer: 'buffer-16-4-1',
        bpp: 4,
        variant: 1,
      },
      {
        width: 32,
        buffer: 'buffer-32-4-1',
        bpp: 4,
        variant: 1,
      },
      {
        width: 32,
        buffer: 'buffer-32-4-2',
        bpp: 4,
        variant: 2,
      },
    ]),
  ),
}));

beforeAll(() => {
  global.fetch = vi.fn().mockImplementation(() =>
    Promise.resolve({
      arrayBuffer: vi.fn(() => ({})),
    }),
  );
  global.Blob = class Blob {
    constructor(buff) {
      this.buffer = buff;
    }

    toString() {
      return this.buffer.toString();
    }
  };

  global.URL.createObjectURL = vi.fn(data => data.toString());
});
