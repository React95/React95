import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import { Tabs, Tab } from '../components/Tabs';
import Fieldset from '../components/Fieldset';
import Checkbox from '../components/Checkbox';
import Dropdown from '../components/Dropdown';

storiesOf('Tabs', module).add('default', () => (
  <Tabs style={{ width: 350 }} activeTab="Compatibility">
    <Tab title="General" disabled />
    <Tab title="Compatibility">
      <p style={{ marginTop: 0, marginBottom: '1.6em' }}>
        If you have problem with this program and it worked correctly on an
        earlier version of Windows, select the compatibility m ode that mathes
        that earlier version.
      </p>

      <Fieldset legend="Compatibility mode" style={{ marginBottom: '1.6em' }}>
        <Checkbox checked={true}>
          Run this program in compatibility mode for:
        </Checkbox>
        <Dropdown style={{ width: 200 }} options={['Windows 95']} />
      </Fieldset>

      <Fieldset legend="Display Settings">
        <Checkbox checked={false}>Run in 256 colors</Checkbox>
        <Checkbox checked={false}>Run in 640 x 480 screen resolution</Checkbox>
        <Checkbox checked={false}>Disable visual themes</Checkbox>
      </Fieldset>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>
        Learn more about <a href="#">program compatibility.</a>
      </p>
    </Tab>
  </Tabs>
));
