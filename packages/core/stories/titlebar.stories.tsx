import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import TitleBar from '../components/TitleBar';
import {
  Option,
  OptionItem,
  OptionsBox,
} from '../components/TitleBar/TitleBar';

export default {
  title: 'Title bar',
  component: TitleBar,
} as Meta;

export const Simple = () => <TitleBar title="SIMPLE.EXE" />;

export const WithActions = () => (
  <TitleBar title="SIMPLE.EXE">
    <OptionsBox>
      <OptionItem>
        <Option
          onClick={event => {
            alert('Hello');
          }}
        >
          ?
        </Option>
      </OptionItem>
      <OptionItem>
        <Option
          onClick={event => {
            alert('Goodbye');
          }}
        >
          X
        </Option>
      </OptionItem>
    </OptionsBox>
  </TitleBar>
);
