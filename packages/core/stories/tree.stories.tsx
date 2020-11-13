import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

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
          iconName: icons.FILE_EXECUTABLE,
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
              iconName: icons.FILE_MEDIA,
              onClick: () => alert('nice!'),
            },
            {
              id: 5,
              label: 'Supergrass',
              iconName: icons.FILE_MEDIA,
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
          iconName: icons.FILE_FONT,
        },
        {
          id: 1,
          label: 'Journal.txt',
          iconName: icons.FILE_TEXT,
        },
      ],
    },
    {
      id: 4,
      label: 'config.cfg',
      iconName: icons.FILE_SETTINGS,
    },
    {
      id: 5,
      label: 'random_file',
      iconName: icons.FILE_UNKNOWN,
    },
  ],
};

export default {
  title: 'Tree',
  component: Tree,
} as Meta;

export const Simple = () => <Tree {...treeNodes} />;

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20',
  },
};
