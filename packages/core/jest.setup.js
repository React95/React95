export const BUFFER_SIZES = {
  16: 'buffer16',
  32: 'buffer32',
};

jest.mock('icojs', () => ({
  isICO: jest.fn(() => true),
  parse: jest.fn(() =>
    Promise.resolve([
      {
        width: 16,
        buffer: 'buffer16',
        bbt: 4,
      },
      {
        width: 32,
        buffer: 'buffer32',
        bbt: 4,
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
