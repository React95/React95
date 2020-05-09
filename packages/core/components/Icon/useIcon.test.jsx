import { renderHook } from '@testing-library/react-hooks';

import useIcon from './useIcon';

const BUFFER_SIZES = {
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

  global.URL.createObjectURL = jest.fn((data) => data.toString());
});

describe('<Icon />', () => {
  describe('useIcon', () => {
    it('should return the icon by given a name', async () => {
      const { result, waitForNextUpdate } = renderHook(
        ({ name, size }) => useIcon({ name, size }),
        {
          initialProps: { name: 'bat', size: 16 },
        },
      );

      expect(result.current.iconUrl).toBe('');

      await waitForNextUpdate();

      expect(result.current.iconUrl).toBe(BUFFER_SIZES[16]);

      expect(result.current.availableIcons).toHaveLength(
        Object.keys(BUFFER_SIZES).length,
      );
    });

    it('should return no iconUrl if you ommit the size', async () => {
      const { result, waitForNextUpdate } = renderHook(
        ({ name, size }) => useIcon({ name, size }),
        {
          initialProps: { name: 'bat' },
        },
      );

      expect(result.current.iconUrl).toBe('');

      await waitForNextUpdate();

      expect(result.current.iconUrl).toBe(undefined);

      expect(result.current.availableIcons).toHaveLength(
        Object.keys(BUFFER_SIZES).length,
      );
    });

    it('should return a fallback iconUrl by given a wrong size', async () => {
      const { result, waitForNextUpdate } = renderHook(
        ({ name, size, fallback }) => useIcon({ name, size, fallback }),
        {
          initialProps: { name: 'bat', size: 48, fallback: true },
        },
      );

      expect(result.current.iconUrl).toBe('');

      await waitForNextUpdate();

      expect(result.current.iconUrl).toBe(Object.values(BUFFER_SIZES)[0]);

      expect(result.current.availableIcons).toHaveLength(
        Object.keys(BUFFER_SIZES).length,
      );
    });
  });
});
