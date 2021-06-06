import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import styled from '@xstyled/styled-components';

import {
  Alert,
  Button,
  Checkbox,
  Dropdown,
  Fieldset,
  Frame,
  GlobalStyle,
  Input,
  List,
  Modal,
  ModalContext,
  ProgressBar,
  RadioButton,
  Range,
  Tab,
  Tabs,
  TaskBar,
  TextArea,
  Tree,
  Tooltip,
  ThemeProvider,
  Video,
} from '../components';

import { Simple as SimpleButton } from './button.stories';
import { Simple as SimpleDropdown } from './dropdown.stories';
import { Simple as SimpleFieldset } from './fieldset.stories';
import { Simple as SimpleInput } from './input.stories';
import { Simple as SimpleTextArea } from './textarea.stories';
import { Simple as SimpleProgressBar } from './progressbar.stories';
import { Simple as SimpleRadioButton } from './radiobutton.stories';
import { Simple as SimpleRange } from './range.stories';
import { Simple as SimpleTabs } from './tabs.stories';
import { Simple as SimpleTree } from './tree.stories';
import { All as AllCheckbox } from './checkbox.stories';
import { WithIcons, Simple as SimpleList } from './list.stories';
import { FromURL } from './video.stories';

const AllList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  height: 600px;

  > * {
    margin-right: 10px;
  }
`;

export default {
  title: 'All',
} as Meta;

export const All = () => (
  <AllList>
    <Alert
      title="Windows Networking"
      type="error"
      closeAlert={() => {}}
      defaultPosition={{
        x: 150,
        y: 500,
      }}
      message="The Windows password you typed is incorrect."
      buttons={[{ value: 'OK', onClick: () => {} }]}
    />

    <div>
      <SimpleButton />
    </div>

    <br />

    <AllCheckbox />

    <br />

    <SimpleDropdown />

    <br />

    <SimpleFieldset />

    <br />
    <div>
      <SimpleInput />
    </div>

    <br />
    <br />

    <div>
      <SimpleTextArea />
    </div>

    <br />
    <br />

    <div>
      <WithIcons />
      <br />
      <SimpleList />
    </div>

    <br />

    <SimpleProgressBar />
    <br />

    <SimpleRadioButton />

    <br />
    <SimpleRange />

    <br />

    <SimpleTabs />

    <br />
    <SimpleTree />

    <br />
    <FromURL />
  </AllList>
);
