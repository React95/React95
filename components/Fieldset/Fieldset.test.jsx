import React from 'react';
import Fieldset from './Fieldset';
import renderer from 'react-test-renderer';

describe('<Fieldset />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with legend prop and children element', () => {
      expect(
        renderer
          .create(
            <Fieldset legend="example">
              <p>something</p>
            </Fieldset>
          )
          .toJSON()
      ).toMatchSnapshot();
    });
  });
});
