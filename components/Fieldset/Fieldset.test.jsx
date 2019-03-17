import React from 'react';
import Fieldset from './Fieldset';
import { render } from 'react-testing-library';

describe('<Fieldset />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with legend prop and children element', () => {
      const { container } = render(
        <Fieldset legend="example">
          <p>something</p>
        </Fieldset>
      );
      expect(container).toMatchSnapshot();
    });
  });
});
