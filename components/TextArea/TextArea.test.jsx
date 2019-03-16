import React from 'react';
import { render } from 'react-testing-library';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<TextArea />);
      expect(container).toMatchSnapshot();
    });
  });
});
