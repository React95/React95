import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect } from 'storybook/test';

import {
  RadioButton,
  RadioButtonProps,
} from '../components/RadioButton/RadioButton';
import { Frame } from '../components';

const meta = {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
} as Meta<RadioButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const SimpleDemo = () => {
  const [selectedOption, setSelectedOption] = React.useState('one');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedOption(e.target.value);

  return (
    <Frame display="flex" flexDirection="column">
      <RadioButton
        name="working"
        value="one"
        checked={selectedOption === 'one'}
        onChange={handleChange}
      >
        Working
      </RadioButton>
      <RadioButton
        name="working"
        value="two"
        checked={selectedOption === 'two'}
        onChange={handleChange}
      >
        Working
      </RadioButton>
      <RadioButton readOnly checked value="three">
        Checked
      </RadioButton>
      <RadioButton readOnly disabled value="four">
        Disabled
      </RadioButton>
      <RadioButton readOnly checked disabled value="five">
        Checked & Disabled
      </RadioButton>
    </Frame>
  );
};

export const Simple: Story = {
  render: () => <SimpleDemo />,
  play: async ({ canvas, userEvent }) => {
    // the two "Working" ones share a name, so checking one unchecks the other.
    // The story keeps the state, so they only change if onChange is called
    const [first, second] = canvas.getAllByRole('radio', { name: 'Working' });

    await expect(first).toBeChecked();
    await expect(second).not.toBeChecked();

    await userEvent.click(second);

    await expect(first).not.toBeChecked();
    await expect(second).toBeChecked();

    const disabled = canvas.getByRole('radio', { name: 'Disabled' });

    await expect(canvas.getByRole('radio', { name: 'Checked' })).toBeChecked();
    await expect(disabled).toBeDisabled();
    await expect(
      canvas.getByRole('radio', { name: 'Checked & Disabled' }),
    ).toBeChecked();

    await userEvent.click(canvas.getByText('Disabled'));

    await expect(disabled).not.toBeChecked();
  },

  parameters: {
    // a demo of every state; the controls are on Playground
    controls: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A14',
    },
  },
};

// a single radio button to try the props on
export const Playground: Story = {
  args: {
    children: 'Option',
    checked: false,
    disabled: false,
    readOnly: true,
    name: 'option',
  },
  play: async ({ args, canvas }) => {
    // the children name the radio button, and the other props reach the input
    const radio = canvas.getByRole('radio', { name: args.children as string });

    await expect(radio).not.toBeChecked();
    await expect(radio).toBeEnabled();
    await expect(radio).toHaveAttribute('name', args.name);
  },
  argTypes: {
    children: { control: 'text' },
  },
};
