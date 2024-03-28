import type { Meta } from '@storybook/react';
import * as React from 'react';

import { TextArea, TextAreaProps } from '../components/TextArea/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
} as Meta<TextAreaProps>;

export const Simple = {
  render: () => {
    const [text, setValue] = React.useState('');

    return (
      <TextArea
        rows={10}
        cols={50}
        value={text}
        onChange={({
          target: { value },
        }: React.ChangeEvent<HTMLTextAreaElement>) => setValue(value)}
      />
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18',
    },
  },
};
