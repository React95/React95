import type { Meta } from '@storybook/react';
import * as React from 'react';

import { Alert, Button, TitleBar } from '../components';

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

import * as styles from './all.stories.css';

export default {
  title: 'All',
} as Meta;

export const All = {
  render: () => {
    const [openAlert, setOpenAlert] = React.useState(true);
    const closeAlert = () => setOpenAlert(false);

    return (
      <div className={styles.list}>
        <div>
          <Button onClick={() => setOpenAlert(true)}> Show Alert </Button>
        </div>
        {openAlert && (
          <Alert
            title="Windows Networking"
            type="error"
            dragOptions={{
              defaultPosition: {
                x: 130,
                y: 130,
              },
            }}
            titleBarOptions={
              <TitleBar.Close key="close" onClick={closeAlert} />
            }
            message="The Windows password you typed is incorrect."
            buttons={[{ value: 'OK', onClick: closeAlert }]}
          />
        )}

        <br />

        <div>
          <SimpleButton.render />
        </div>

        <br />
        <SimpleAvatar.render {...SimpleAvatar.args} />

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
        <SimpleProgressBar.render {...SimpleProgressBar.args} />

        <br />
        <SimpleRadioButton.render />

        <br />
        <SimpleRange.render />

        <br />
        <SimpleTabs.render />

        <br />
        <SimpleTree.render />

        <br />
        <SimpleTooltip.render {...SimpleTooltip.args} />

        <br />
        <FromURL.render />

        <br />
        <SimpleTitleBar.render />

        <br />
        <Inactive.render />

        <br />
        <Complete.render />
      </div>
    );
  },
};
