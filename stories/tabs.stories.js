import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import { Tabs, Tab } from '../components/Tabs';

storiesOf('Tabs', module).add('default', () => (
  <Tabs>
    <Tab>1</Tab>
    <Tab>2</Tab>
    <Tab>3</Tab>
    <Tab>4</Tab>
  </Tabs>
));
