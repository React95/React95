import { FileIcons } from '@react95/icons';
import type { Meta } from '@storybook/react';
import * as React from 'react';

import TitleBar from '../components/TitleBar';

export default {
  title: 'TitleBar',
  component: TitleBar,
  tags: ['autodocs'],
} as Meta<typeof TitleBar>;

export const Simple = {
  render: () => <TitleBar w={200} />,

  parameters: {
    design: {
      disabled: true,
    },
  },
};

export const Inactive = {
  render: () => <TitleBar active={false} w={200} />,
};

export const Complete = {
  render: () => (
    <TitleBar
      active
      icon={<FileIcons variant="32x32_4" />}
      title="untitled - Paint"
      className="draggable"
      w={200}
    >
      <TitleBar.OptionsBox>
        <TitleBar.Option>?</TitleBar.Option>
        <TitleBar.Option>X</TitleBar.Option>
      </TitleBar.OptionsBox>
    </TitleBar>
  ),
};
