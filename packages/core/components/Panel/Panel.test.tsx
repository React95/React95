import React from 'react';
import { waitRender } from '../shared/test/utils';
import Panel from './Panel';

describe('<Panel />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', async () => {
      const { container } = await waitRender(<Panel>Dorem ipsum</Panel>);
      expect(container).toMatchSnapshot();
    });
  });
});
