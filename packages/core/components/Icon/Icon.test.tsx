import React from 'react';
import { waitRender } from '../shared/test/utils';

import Icon from './Icon';

describe('<Icon />', () => {
  it('should match snapshot', async () => {
    const { container } = await waitRender(<Icon name="bat_16x16_4bit" />);

    expect(container).toMatchSnapshot();
  });
});
