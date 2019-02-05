import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import { Tabs, Tab } from '../components/Tabs';

storiesOf('Tabs', module).add('default', () => (
  <Tabs>
    <Tab title="Background">1</Tab>
    <Tab title="Screen Saver">2</Tab>
    <Tab title="Appearance">3</Tab>
    <Tab title="Settings">4</Tab>
  </Tabs>
));
