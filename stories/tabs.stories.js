import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import { Tabs, Tab } from '../components/Tabs';

storiesOf('Tabs', module).add('default', () => (
  <Tabs>
    <Tab title="Tab 1">1</Tab>
    <Tab title="Tab 2">2</Tab>
    <Tab title="Tab 3">3</Tab>
    <Tab title="Tab 4">4</Tab>
  </Tabs>
));
