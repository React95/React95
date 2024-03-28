import { Doc } from '@react95/icons';
import type { Meta } from '@storybook/react';
import * as React from 'react';
import Close from '../components/Modal/close.svg';
import Help from '../components/Modal/help.svg';

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
      className="draggable"
      width="200px"
    >
      <TitleBar.OptionsBox>
        <TitleBar.Option>
          <img src={Help} alt="help" />
        </TitleBar.Option>
        <TitleBar.Option>
          <img src={Close} alt="close" />
        </TitleBar.Option>
      </TitleBar.OptionsBox>
    </TitleBar>
  ),
};
