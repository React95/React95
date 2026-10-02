import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { Checkbox, CheckboxProps } from '../components/Checkbox/Checkbox';
import { Frame } from '../components';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} as Meta<CheckboxProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const AllDemo = () => {
  const [checked, toggleChecked] = React.useState(true);

  return (
    <Frame display="flex" flexDirection="column">
      <Checkbox
        checked={checked}
        onChange={() => {
          toggleChecked(!checked);
        }}
      >
        Working
      </Checkbox>

      <Checkbox readOnly checked>
        Checked
      </Checkbox>
      <Checkbox readOnly checked={false}>
        Unchecked
      </Checkbox>
      <Checkbox readOnly disabled>
        Disabled
      </Checkbox>

      <Checkbox readOnly disabled checked>
        Checked and Disabled
      </Checkbox>
    </Frame>
  );
};

export const All: Story = {
  render: () => <AllDemo />,
  // each state is tested in its own story
  tags: ['!test'],

  parameters: {
    // a demo of every state; each one also has its own story with controls
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Checked: Story = {
  args: { children: 'Checked', checked: true, readOnly: true },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Unchecked: Story = {
  args: { children: 'Unchecked', checked: false, readOnly: true },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    children: 'Checked and Disabled',
    checked: true,
    disabled: true,
    readOnly: true,
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

const WorkingDemo = (props: CheckboxProps) => {
  const [checked, toggleChecked] = React.useState(true);

  return (
    <Checkbox
      {...props}
      checked={checked}
      onChange={() => toggleChecked(!checked)}
    />
  );
};

export const Working: Story = {
  args: { children: 'Working', disabled: false },
  render: args => <WorkingDemo {...args} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};
