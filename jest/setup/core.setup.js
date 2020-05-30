import 'jest-styled-components';

jest.mock('icojs', () => ({
  isICO: jest.fn(() => true),
  parse: jest.fn(() =>
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
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      arrayBuffer: jest.fn(() => ({})),
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

  global.URL.createObjectURL = jest.fn(data => data.toString());
});
