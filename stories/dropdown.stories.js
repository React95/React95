import React from 'react';
import { storiesOf } from '@storybook/react';

import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';
import Dropdown from '../components/Dropdown';

const code = `<Dropdown
  options={[
    '',
    'C:\\Documents and Settings',
    'C:\\Documents and Settings\\Documents',
    'iexplorer.exe',
  ]}
/>
`;

storiesOf('Dropdown', module).add('default', () => (
  <WithClippy component="Dropdown" code={code}>
    <Dropdown />
  </WithClippy>
));
