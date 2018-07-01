import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

import Fieldset from '../components/Fieldset';
import Checkbox from '../components/Checkbox';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

const code = `<Fieldset legend="Connection Settings">
  <Checkbox checked={false}>
    Disable Remote Keyboard & Pointer
  </Checkbox>
  <Checkbox checked={false}>
    Disable Local Keyboard & Pointer
  </Checkbox>
  <Checkbox checked={true}>
    Remove Desktop Wallpaper
  </Checkbox>
</Fieldset>
`;

storiesOf('Fieldset', module).add('default', () => (
  <WithClippy component="Fieldset" code={code}>
    <Fieldset legend="Connection Settings" style={{ width: '300px' }}>
      <CheckboxList>
        <Checkbox checked={false}>Disable Remote Keyboard & Pointer</Checkbox>
        <Checkbox checked={false}>Disable Local Keyboard & Pointer</Checkbox>
        <Checkbox checked={true}>Remove Desktop Wallpaper</Checkbox>
      </CheckboxList>
    </Fieldset>
  </WithClippy>
));
