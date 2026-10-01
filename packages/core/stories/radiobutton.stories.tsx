import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

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
  },
  argTypes: {
    children: { control: 'text' },
  },
};
