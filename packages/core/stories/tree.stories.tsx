import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import * as React from 'react';

import { Tree, TreeProps } from '../components/Tree/Tree';
import { Frame } from '../components';
import type { NodeProps } from '../components/Tree/Node';
import { Explorer100 } from '@react95/icons';

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
          icon: <icons.FILE_EXECUTABLE variant="16x16_4" />,
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
              icon: <icons.FILE_MEDIA variant="16x16_4" />,
            },
            {
              id: 5,
              label: 'Supergrass',
              icon: <icons.FILE_MEDIA variant="16x16_4" />,
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
          icon: <icons.FILE_FONT variant="16x16_4" />,
        },
        {
          id: 1,
          label: 'Journal.txt',
          icon: <icons.FILE_TEXT variant="16x16_4" />,
        },
      ],
    },
    {
      id: 4,
      label: 'config.cfg',
      icon: <icons.FILE_SETTINGS variant="16x16_4" />,
    },
    {
      id: 5,
      label: 'random_file',
      icon: <icons.FILE_UNKNOWN variant="16x16_4" />,
    },
  ],
};

const root = {
  id: 6,
  label: 'My Computer',
  icon: <Explorer100 variant="16x16_4" />,
};

export default {
  title: 'Tree',
  component: Tree,
  tags: ['autodocs'],
} satisfies Meta<typeof Tree>;

// every node reports its clicks, like Explorer's status bar
const withOnClick = (
  nodes: Array<NodeProps>,
  onClick: NonNullable<NodeProps['onClick']>,
): Array<NodeProps> =>
  nodes.map(node => ({
    ...node,
    onClick,
    children: node.children && withOnClick(node.children, onClick),
  }));

const SimpleDemo = () => {
  const [selected, setSelected] = React.useState<string>();
  // `node` is optional only for the types: NodeProps' onClick is also
  // typed as the <li>'s, which doesn't get it. Tree always passes it
  const select = (_event: unknown, node?: { label: string }) =>
    setSelected(node?.label);

  return (
    <>
      <Tree
        data={withOnClick(treeNodes.data, select)}
        root={{ ...root, onClick: select }}
      />
      <Frame
        role="status"
        boxShadow="$out"
        mt="$12"
        p="$3"
        bgColor="$material"
        w="180px"
      >
        <Frame boxShadow="$in" px="$4" py="$2">
          {selected ? `Selected: ${selected}` : 'Click a file or folder'}
        </Frame>
      </Frame>
    </>
  );
};

export const Simple: StoryObj<typeof Tree> = {
  render: () => <SimpleDemo />,
  play: async ({ canvas, userEvent }) => {
    const music = canvas.getByText('Music');
    const folder = music.closest('li')!;
    // the +/- next to the folder's own name (subfolders have one too)
    const toggle = () => within(folder).getAllByText(/^[+-]$/)[0];

    // folders start closed: their content isn't there
    await expect(toggle()).toHaveTextContent('+');
    await expect(folder).not.toHaveTextContent('Indie');

    // double-clicking the name opens it
    await userEvent.dblClick(music);

    await expect(toggle()).toHaveTextContent('-');
    await expect(folder).toHaveTextContent('Indie');
    await expect(folder).not.toHaveTextContent('Weezer');

    // subfolders open on their own
    await userEvent.dblClick(canvas.getByText('Indie'));

    await expect(folder).toHaveTextContent('Weezer');

    // clicking a node calls its onClick with the node (the story shows its
    // label in the status line)
    await userEvent.click(canvas.getByText('Weezer'));

    await expect(canvas.getByRole('status')).toHaveTextContent(
      'Selected: Weezer',
    );

    // the - closes it
    await userEvent.click(toggle());

    await expect(toggle()).toHaveTextContent('+');
    await expect(folder).not.toHaveTextContent('Indie');

    // and with the keyboard, Space opens the focused folder (and, like a
    // click, calls its onClick)
    music.focus();
    await userEvent.keyboard(' ');

    await expect(folder).toHaveTextContent('Indie');
    await expect(canvas.getByRole('status')).toHaveTextContent(
      'Selected: Music',
    );

    // the tree follows the WAI-ARIA treeview pattern: tree/treeitem roles,
    // aria-expanded on folders, and a single tab stop for the whole tree
    const tree = canvas.getByRole('tree');
    const treeitems = () => within(tree).getAllByRole('treeitem');
    const tabbable = () => treeitems().find(item => item.tabIndex === 0);
    await expect(folder).toHaveAttribute('role', 'treeitem');
    await expect(folder).toHaveAttribute('aria-expanded', 'true');
    await expect(treeitems().filter(item => item.tabIndex === 0)).toHaveLength(
      1,
    );

    // ArrowLeft closes the focused folder, ArrowRight opens it again
    folder.focus();
    await userEvent.keyboard('{ArrowLeft}');
    await expect(folder).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard('{ArrowRight}');
    await expect(folder).toHaveAttribute('aria-expanded', 'true');

    // ArrowDown moves focus (and the single tab stop) to the next visible
    // node, ArrowUp moves back
    await userEvent.keyboard('{ArrowDown}');
    await expect(tabbable()).toHaveTextContent('Indie');
    await userEvent.keyboard('{ArrowUp}');
    await expect(tabbable()).toHaveTextContent('Music');
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A20',
    },
  },
};
