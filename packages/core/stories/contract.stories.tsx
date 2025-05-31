import * as React from 'react';
import { contract, Frame, Tree } from '../components';
import { TreeProps } from '../components/Tree/Tree';
import copy from 'copy-to-clipboard';
import {
  CalcSc,
  Copy,
  FilePen,
  Files,
  Mspaint,
  Wangimg129,
} from '@react95/icons';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'Contract',
};

const treeNodes: TreeProps['data'] = [
  {
    id: 0,
    label: 'space',
    icon: <CalcSc variant="16x16_4" />,
    children: Object.entries(contract.space).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Copy variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
  {
    id: 1,
    label: 'colors',
    icon: <Mspaint variant="16x16_4" />,
    children: Object.entries(contract.colors).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Copy variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
  {
    id: 2,
    label: 'zIndices',
    icon: <Files variant="16x16_4" />,
    children: Object.entries(contract.zIndices).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Copy variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
  {
    id: 3,
    label: 'shadows',
    icon: <Wangimg129 variant="16x16_4" />,
    children: Object.entries(contract.shadows).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Tree.icons.FILE_TEXT variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
];

type Story = StoryObj<unknown>;

export const Simple: Story = {
  render: () => {
    return (
      <Frame
        width="470px"
        p="$10"
        bgColor="$material"
        boxShadow="$out"
        display="flex"
        flexDirection="column"
        gap="$8"
      >
        <Frame as="p" fontWeight="bold" mt="$0">
          Contract Theme
        </Frame>
        <Frame
          as="code"
          bgColor="white"
          p="$6"
          alignSelf="start"
          boxShadow="$in"
        >
          import {'{'} contract {'}'} from '@react95/core';
        </Frame>
        <Frame>
          <Tree
            data={treeNodes}
            root={{
              id: -1,
              label: 'contract',
              icon: <FilePen variant="16x16_4" />,
              onClick: () => {
                copy("import { contract } from '@react95/core';");
              },
            }}
          />
        </Frame>
      </Frame>
    );
  },
  parameters: {
    design: { disable: true },
  },
};
