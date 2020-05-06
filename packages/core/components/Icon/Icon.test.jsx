import React from 'react';
import { render } from '../shared/test/utils';
import Icon from './Icon';

jest.mock('icojs', () => ({
  isICO: jest.fn(() => true),
  parse: jest.fn(() =>
    Promise.resolve([
      {
        width: 16,
        buffer: 'buffer',
        bbt: 4,
      },
      {
        width: 32,
        buffer: 'buffer',
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

  global.URL.createObjectURL = jest.fn(data => data.toString());
});

describe('<Icon />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Icon name="bat" />);
      expect(container).toMatchSnapshot();
    });

    it.only('should have different snapshots for different sizes', async () => {
      const { container: icon16 } = render(<Icon name="bat" size={16} />);
      const { container: icon32 } = render(<Icon name="bat" size={32} />);

      expect(icon16).toMatchSnapshot();
      expect(icon32).toMatchSnapshot();
    });
  });
});
