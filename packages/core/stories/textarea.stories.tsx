import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TextArea from '../components/TextArea';

export default {
  title: 'Textarea',
  component: TextArea,
} as Meta;

export const Simple = () => {
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
};

export const SimpleWithScrollbar = () => {
  const [text, setValue] = React.useState(
    'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
  );

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
}
Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18',
  },
};
