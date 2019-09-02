import React from 'react';
import { storiesOf } from '@storybook/react';

import withClippy from '../.storybook/src/clippy-addon/clippy-addon';
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

storiesOf('Dropdown', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <Dropdown />);
