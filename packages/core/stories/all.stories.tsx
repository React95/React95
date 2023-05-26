import type { Meta } from '@storybook/react';
import styled from '@xstyled/styled-components';
import * as React from 'react';

import { Alert } from '../components';

import { Simple as SimpleAvatar } from './avatar.stories';
import { Simple as SimpleButton } from './button.stories';
import { All as AllCheckbox } from './checkbox.stories';
import { Simple as SimpleDropdown } from './dropdown.stories';
import { Simple as SimpleFieldset } from './fieldset.stories';
import { Simple as SimpleInput } from './input.stories';
import { Simple as SimpleList, WithIcons } from './list.stories';
import { Simple as SimpleProgressBar } from './progressbar.stories';
import { Simple as SimpleRadioButton } from './radiobutton.stories';
import { Simple as SimpleRange } from './range.stories';
import { Simple as SimpleTabs } from './tabs.stories';
import { Simple as SimpleTextArea } from './textarea.stories';
import {
  Complete,
  Inactive,
  Simple as SimpleTitleBar,
} from './titlebar.stories';
import { Simple as SimpleTooltip } from './tooltip.stories';
import { Simple as SimpleTree } from './tree.stories';
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

export const All = {
  render: () => {
    return (
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
          <SimpleButton.render />
        </div>

        <br />
        <SimpleAvatar.render />

        <br />
        <AllCheckbox.render />

        <br />
        <SimpleDropdown.render />

        <br />
        <SimpleFieldset.render />

        <br />
        <div>
          <SimpleInput.render />
        </div>

        <br />
        <br />

        <div>
          <SimpleTextArea.render />
        </div>

        <br />
        <br />

        <div>
          <WithIcons.render />
          <br />
          <SimpleList.render />
        </div>

        <br />
        <SimpleProgressBar.render />

        <br />
        <SimpleRadioButton.render />

        <br />
        <SimpleRange.render />

        <br />
        <SimpleTabs.render />

        <br />
        <SimpleTree.render />

        <br />
        <SimpleTooltip.render />

        <br />
        <FromURL.render />

        <br />
        <SimpleTitleBar.render />

        <br />
        <Inactive.render />

        <br />
        <Complete.render />
      </AllList>
    );
  },
};
