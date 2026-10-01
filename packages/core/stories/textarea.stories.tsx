import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { TextArea, TextAreaProps } from '../components/TextArea/TextArea';

const meta = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    rows: 10,
    cols: 50,
    placeholder: '',
    disabled: false,
    readOnly: false,
  },
} as Meta<TextAreaProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const SimpleDemo = (props: TextAreaProps) => {
  const [text, setValue] = React.useState('');

  return (
    <TextArea
      {...props}
      value={text}
      onChange={({
        target: { value },
      }: React.ChangeEvent<HTMLTextAreaElement>) => setValue(value)}
    />
  );
};

export const Simple: Story = {
  render: args => <SimpleDemo {...args} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18',
    },
  },
};
