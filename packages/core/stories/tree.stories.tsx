import type { Meta } from '@storybook/react';
import * as React from 'react';

import Tree, { TreeProps } from '../components/Tree/Tree';

const { icons } = Tree;

const treeNodes: TreeProps = {
  data: [
    {
      id: 0,
      label: 'Applications',
      children: [
        {
          id: 1,
          label: 'virus.exe',
          icon: <icons.FILE_EXECUTABLE />,
        },
      ],
    },
    {
      id: 2,
      label: 'Music',
      children: [
        {
          id: 3,
          label: 'Indie',
          children: [
            {
              id: 4,
              label: 'Weezer',
              icon: <icons.FILE_MEDIA />,
              onClick: () => alert('nice!'),
            },
            {
              id: 5,
              label: 'Supergrass',
              icon: <icons.FILE_MEDIA />,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: 'Other',
      children: [
        {
          id: 0,
          label: 'Fira Code.ttf',
          icon: <icons.FILE_FONT />,
        },
        {
          id: 1,
          label: 'Journal.txt',
          icon: <icons.FILE_TEXT />,
        },
      ],
    },
    {
      id: 4,
      label: 'config.cfg',
      icon: <icons.FILE_SETTINGS />,
    },
    {
      id: 5,
      label: 'random_file',
      icon: <icons.FILE_UNKNOWN />,
    },
  ],
};

export default {
  title: 'Tree',
  component: Tree,
  tags: ['autodocs'],
} as Meta<typeof Tree>;

export const Simple = {
  render: () => <Tree {...treeNodes} />,

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20',
    },
  },
};
