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

All.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A4',
  },
};

export const Checked = () => <Checkbox checked>Checked</Checkbox>;

Checked.parameters = {
  design: { disabled: true },
};

export const Unchecked = () => <Checkbox checked={false}>Unchecked</Checkbox>;

Unchecked.parameters = {
  design: { disabled: true },
};

export const Disabled = () => <Checkbox disabled>Disabled</Checkbox>;

Disabled.parameters = {
  design: { disabled: true },
};

export const CheckedAndDisabled = () => (
  <Checkbox disabled checked>
    Checked and Disabled
  </Checkbox>
);

CheckedAndDisabled.parameters = {
  design: { disabled: true },
};

export const Working = () => {
  const [checked, toggleChecked] = React.useState(true);

  return (
    <Checkbox checked={checked} onChange={() => toggleChecked(!checked)}>
      Working
    </Checkbox>
  );
};

Working.parameters = {
  design: { disabled: true },
};
