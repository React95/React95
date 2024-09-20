import { Doc, Star } from '@react95/icons';
import type { Meta } from '@storybook/react';
import * as React from 'react';

import { TitleBar, TitleBarProps } from '../components/TitleBar/TitleBar';

export default {
  title: 'TitleBar',
  component: TitleBar,
  tags: ['autodocs'],
} as Meta<TitleBarProps>;

export const Simple = {
  render: () => <TitleBar width="200px" />,

  parameters: {
    design: {
      disabled: true,
    },
  },
};

export const Inactive = {
  render: () => <TitleBar active={false} width="200px" />,
};

export const Complete = {
  render: () => (
    <TitleBar
      active
      icon={<Doc variant="16x16_4" />}
      title="untitled - Paint"
      width="300px"
    >
      <TitleBar.OptionsBox>
        <TitleBar.Option as="a" href="https://github.com/React95/React95">
          <Star variant="16x16_4" />
        </TitleBar.Option>
        <TitleBar.Help />
        <TitleBar.Maximize />
        <TitleBar.Minimize />
        <TitleBar.Restore />
        <TitleBar.Close />
      </TitleBar.OptionsBox>
    </TitleBar>
  ),
};
