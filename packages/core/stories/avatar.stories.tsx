import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Avatar, AvatarProps } from '../components/Avatar/Avatar';
import { Frame } from '../components';

export default {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    circle: {
      control: 'boolean',
    },
    srcSet: {
      control: 'text',
      description:
        'A string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances.<br >[`img` srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)',
    },
    src: {
      control: 'text',
      description:
        'Specifies the image to display in the `<img>` element.<br >[`img` src](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/src)',
    },
    alt: {
      control: 'text',
      description:
        'fallback (alternate) text to display when the image specified by the `<img>` element is not loaded.<br >[`img` alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt)',
    },
    size: {
      control: 'text',
      description: "Avatar's width and height",
      defaultValue: '48px',
    },
  },
} as Meta<AvatarProps<'div'>>;

type Story = StoryObj<AvatarProps<'div'>>;

export const Simple: Story = {
  render: args => <Avatar {...args} />,
  args: {
    src: 'https://github.com/React95.png',
    alt: 'React95 logo',
    size: '48px',
    id: 'profile-picture',
    className: 'profile-picture',
  },
  play: async ({ args, canvas }) => {
    // with `src`, the avatar shows an image described by `alt`
    const image = canvas.getByRole('img', { name: args.alt });
    const avatar = image.parentElement!;

    await expect(image).toHaveAttribute('src', args.src);
    // other props reach the avatar, and `className` is added to its classes
    // (Circle and Letters fail if it replaces the avatar's own class)
    await expect(avatar).toHaveAttribute('id', args.id);
    await expect(avatar).toHaveClass(args.className!);
    await expect(avatar).toHaveStyle({ width: args.size, height: args.size });
    await expect(avatar).not.toHaveStyle({ borderRadius: '50%' });
  },
  parameters: {
    design: { disable: true },
  },
};

export const Circle: Story = {
  render: () => (
    <Avatar srcSet="https://github.com/React95.png 1x" alt="photo" circle />
  ),
  play: async ({ canvas }) => {
    // `srcSet` alone is enough to show the image
    const image = canvas.getByRole('img', { name: 'photo' });

    await expect(image).toHaveAttribute(
      'srcset',
      'https://github.com/React95.png 1x',
    );
    await expect(image.parentElement).toHaveStyle({ borderRadius: '50%' });
  },

  parameters: {
    design: { disable: true },
  },
};

export const Letters: Story = {
  render: () => (
    <Frame display="inline-flex" gap="8px">
      <Avatar>SQ</Avatar>
      <Avatar circle>RO</Avatar>
    </Frame>
  ),
  play: async ({ canvas }) => {
    // without `src`, the avatar shows its children, at the default size
    const square = canvas.getByText('SQ');
    const round = canvas.getByText('RO');

    await expect(canvas.queryAllByRole('img')).toHaveLength(0);
    await expect(square).toHaveStyle({ width: '48px', height: '48px' });
    await expect(square).not.toHaveStyle({ borderRadius: '50%' });
    await expect(round).toHaveStyle({ width: '48px', height: '48px' });
    await expect(round).toHaveStyle({ borderRadius: '50%' });
  },

  parameters: {
    design: { disable: true },
  },
};
