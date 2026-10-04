import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect } from 'storybook/test';

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
  play: async ({ args, canvas }) => {
    // the children name the checkbox
    const checkbox = canvas.getByRole('checkbox', { name: args.children });

    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeEnabled();
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Unchecked: Story = {
  // `label` also names the checkbox, when there are no children
  args: { label: 'Unchecked', checked: false, readOnly: true },
  play: async ({ args, canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: args.label });

    await expect(checkbox).not.toBeChecked();
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
  play: async ({ args, canvas, userEvent }) => {
    const checkbox = canvas.getByRole('checkbox', { name: args.children });

    await expect(checkbox).toBeDisabled();

    await userEvent.click(canvas.getByText(args.children!));

    await expect(checkbox).not.toBeChecked();
  },

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
  play: async ({ args, canvas }) => {
    const checkbox = canvas.getByRole('checkbox', { name: args.children });

    await expect(checkbox).toBeChecked();
    await expect(checkbox).toBeDisabled();
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
  args: {
    children: 'Working',
    disabled: false,
    name: 'working',
    className: 'working',
    style: { cursor: 'pointer' },
  },
  render: args => <WorkingDemo {...args} />,
  play: async ({ args, canvas, userEvent }) => {
    const checkbox = canvas.getByRole('checkbox', { name: args.children });
    const label = canvas.getByText(args.children!);

    // `style` and `className` go to the label, the other props to the input
    await expect(checkbox.closest('label')).toHaveClass(args.className!);
    await expect(checkbox.closest('label')).toHaveStyle({
      cursor: args.style?.cursor,
    });
    await expect(checkbox).toHaveAttribute('name', args.name);

    // the story keeps the state, so it only changes if onChange is called.
    // Clicking the text works too, since the input is inside the label
    await expect(checkbox).toBeChecked();
    await userEvent.click(label);
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
    },
  },
};
