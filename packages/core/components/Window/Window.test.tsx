import React from 'react';
import { waitRender } from '../shared/test/utils';
import Window from './Window';

const originalError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});

describe('<Window />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(<Window />);
      expect(container).toMatchSnapshot();
    });
  });
});
