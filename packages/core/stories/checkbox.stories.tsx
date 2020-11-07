import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import Checkbox from '../components/Checkbox';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

export const All = () => {
  const [checked, toggleChecked] = React.useState(true);

  return (
    <CheckboxList>
      <Checkbox
        checked={checked}
        onChange={() => {
          toggleChecked(!checked);
        }}
      >
        Working
      </Checkbox>
      <Checkbox checked>Checked</Checkbox>
      <Checkbox checked={false}>Unchecked</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled checked>
        Checked and Disabled
      </Checkbox>
    </CheckboxList>
  );
};

export const Checked = () => <Checkbox checked>Checked</Checkbox>;
export const Unchecked = () => <Checkbox checked={false}>Unchecked</Checkbox>;
export const Disabled = () => <Checkbox disabled>Disabled</Checkbox>;

export const CheckedAndDisabled = () => (
  <Checkbox disabled checked>
    Checked and Disabled
  </Checkbox>
);

export const Working = () => {
  const [checked, toggleChecked] = React.useState(true);

  return (
    <Checkbox checked={checked} onChange={() => toggleChecked(!checked)}>
      Working
    </Checkbox>
  );
};
