import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

import Tooltip from '../components/Tooltip';

const code = `<Tooltip text={actualDate} delay={1000}>
  <span>Hover me</span>
</Tooltip>
`;

storiesOf('Tooltip', module).add('default', () => (
  <WithClippy component="Tooltip" code={code}>
    <br />
    <br />
    <br />
    <Tooltip>
      <span>Hover me</span>
    </Tooltip>
  </WithClippy>
));
