import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { FileIcons } from '@react95/icons';

import TitleBar from '../components/TitleBar';

export default {
  title: 'TitleBar',
  component: TitleBar,
} as Meta;

export const Simple = () => <TitleBar width={200} />;

export const Inactive = () => <TitleBar active={false} width={200} />;

export const Complete = () => (
  <TitleBar
    active
    icon={<FileIcons variant="32x32_4" />}
    title="untitled - Paint"
    className="draggable"
    width={200}
  >
    <TitleBar.OptionsBox>
      <TitleBar.Option>?</TitleBar.Option>
      <TitleBar.Option>X</TitleBar.Option>
    </TitleBar.OptionsBox>
  </TitleBar>
);

Simple.parameters = {
  design: {
    disabled: true,
  },
};
