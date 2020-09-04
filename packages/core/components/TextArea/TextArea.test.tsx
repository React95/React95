import React from 'react';
import { render } from '../shared/test/utils';
import TextArea from './TextArea';

describe('<TextArea />', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(<TextArea />);
      expect(container).toMatchSnapshot();
    });
  });
});
