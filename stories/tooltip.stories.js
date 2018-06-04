import React from 'react';
import Tooltip from '../components/Tooltip';

import { storiesOf } from '@storybook/react';

storiesOf('Tooltip', module).add('default', () => (
  <div>
    <br />
    <br />
    <br />
    <Tooltip>
      <span>Hover me</span>
    </Tooltip>
  </div>
));
