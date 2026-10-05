import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Checkbox, Dropdown, Fieldset, Input } from '../components';
import { Tab } from '../components/Tabs/Tab';
import { Tabs, TabsProps } from '../components/Tabs/Tabs';

const meta = {
  title: 'Tabs, Tab',
  component: Tabs,
  tags: ['autodocs'],
  subcomponents: { Tab },
  args: {
    defaultActiveTab: 'Compatibility',
  },
  argTypes: {
    defaultActiveTab: {
      control: 'select',
      options: ['General', 'Compatibility'],
    },
  },
} as Meta<TabsProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: args => (
    // `defaultActiveTab` is only read on mount, so a new value remounts Tabs
    <Tabs key={args.defaultActiveTab} width="350px" {...args}>
      <Tab title="General">
        <Fieldset legend="Logon validation" style={{ marginBottom: '1em' }}>
          <Checkbox readOnly checked>
            Log on to Windows NT domain
          </Checkbox>
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
          <Checkbox readOnly checked>
            Run this program in compatibility mode for:
          </Checkbox>
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
          <a href="https://react95.io">program compatibility.</a>
        </p>
      </Tab>
    </Tabs>
  ),
  play: async ({ args, canvas, userEvent }) => {
    // a fieldset only one of the tabs has, to tell which content is shown
    const contentOf = {
      General: 'Logon validation',
      Compatibility: 'Compatibility mode',
    };
    const first = args.defaultActiveTab as keyof typeof contentOf;
    const other = first === 'General' ? 'Compatibility' : 'General';
    // the tabs are a list, and the active tab's content comes right after it
    const content = canvas.getByRole('list').nextElementSibling;

    // the tab from `defaultActiveTab` starts active, showing only its content
    await expect(content).toHaveTextContent(contentOf[first]);
    await expect(content).not.toHaveTextContent(contentOf[other]);

    await userEvent.click(canvas.getByText(other));

    // clicking another tab shows its content instead
    await expect(content).toHaveTextContent(contentOf[other]);
    await expect(content).not.toHaveTextContent(contentOf[first]);
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A16',
    },
  },
};
