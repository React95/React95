import React from 'react';
import { waitRender } from '../shared/test/utils';
import TitleBar from './TitleBar';

const originalError = console.error;

beforeEach(() => {
  console.error = jest.fn();
});

afterEach(() => {
  console.error = originalError;
});

describe('<TitleBar />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(
        <TitleBar title="test.exe" icon="help" isActive={true} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
