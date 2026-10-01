import type { Meta, StoryObj } from '@storybook/react-vite';

import { Video } from '../components/Video/Video';
import EXPLORER_VIDEO from './EXPLORER.mp4';

const meta = {
  title: 'Video',
  component: Video,
  tags: ['autodocs'],
} as Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FromURL: Story = {
  args: {
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
  render: args => <Video w="320px" marginBottom="$4" {...args} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
    },
  },
};

export const FromFile: Story = {
  args: {
    src: EXPLORER_VIDEO,
    name: 'Explorer',
  },
  render: args => <Video w="320px" {...args} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A21',
    },
  },
};
