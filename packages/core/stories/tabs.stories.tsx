import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Tabs, Tab } from '../components/Tabs';
import Fieldset from '../components/Fieldset';
import Checkbox from '../components/Checkbox';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';

export default {
  title: 'Tabs, Tab',
  component: Tabs,
  subcomponents: { Tab },
} as Meta;

export const Simple = () => (
  <Tabs style={{ width: 350 }} defaultActiveTab="Compatibility">
    <Tab title="General">
      <Fieldset legend="Logon validation" style={{ marginBottom: '1em' }}>
        <Checkbox checked>Log on to Windows NT domain</Checkbox>
        <br />
        <p style={{ marginLeft: 22, marginTop: 4 }}>
          When you log on, your password will be verified in a Windows NT
          domain.
        </p>
        <p style={{ marginBottom: 4, marginLeft: 22 }}>Windows NT domain:</p>
        <Input style={{ width: 180, marginLeft: 22 }} />
      </Fieldset>

      <Fieldset legend="Network logon options">
        <Checkbox>Quick logon</Checkbox>
        <p style={{ marginBottom: 4, marginLeft: 22, marginTop: 4 }}>
          Windows logs you onto the network, but network drives are not
          reconnected until you use them.
        </p>
        <Checkbox>Logon and restore network connections</Checkbox>
        <p style={{ marginBottom: 4, marginLeft: 22, marginTop: 4 }}>
          When you log onto the network, Windows verifies that each network
          drive is ready to use.
        </p>
      </Fieldset>
    </Tab>
    <Tab title="Compatibility">
      <p style={{ marginTop: 0, marginBottom: '1.6em' }}>
        If you have problems with this program and it worked correctly on an
        earlier version of Windows, select the compatibility mode that matches
        that earlier version.
      </p>

      <Fieldset legend="Compatibility mode" style={{ marginBottom: '1.6em' }}>
        <Checkbox checked>Run this program in compatibility mode for:</Checkbox>
        <Dropdown style={{ width: 200 }} options={['Windows 95']} />
      </Fieldset>

      <Fieldset legend="Display Settings">
        <Checkbox>Run in 256 colors</Checkbox>
        <Checkbox>Run in 640 x 480 screen resolution</Checkbox>
        <Checkbox>Disable visual themes</Checkbox>
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
        Learn more about{' '}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">program compatibility.</a>
      </p>
    </Tab>
  </Tabs>
);

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16',
  },
};
