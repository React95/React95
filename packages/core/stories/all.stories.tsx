import { composeStories, type Meta } from '@storybook/react-vite';
import * as React from 'react';

import { Alert, Button, TitleBar } from '../components';

import * as AvatarStories from './avatar.stories';
import * as ButtonStories from './button.stories';
import * as CheckboxStories from './checkbox.stories';
import * as DropdownStories from './dropdown.stories';
import * as FieldsetStories from './fieldset.stories';
import * as InputStories from './input.stories';
import * as ListStories from './list.stories';
import * as ProgressBarStories from './progressbar.stories';
import * as RadioButtonStories from './radiobutton.stories';
import * as RangeStories from './range.stories';
import * as TabsStories from './tabs.stories';
import * as TextAreaStories from './textarea.stories';
import * as TitleBarStories from './titlebar.stories';
import * as TooltipStories from './tooltip.stories';
import * as TreeStories from './tree.stories';
import * as VideoStories from './video.stories';

import * as styles from './all.stories.css';

// each story renders with its args, whether or not it has a custom `render`
const { Simple: SimpleAvatar } = composeStories(AvatarStories);
const { Simple: SimpleButton } = composeStories(ButtonStories);
const { All: AllCheckbox } = composeStories(CheckboxStories);
const { Simple: SimpleDropdown } = composeStories(DropdownStories);
const { Simple: SimpleFieldset } = composeStories(FieldsetStories);
const { Simple: SimpleInput } = composeStories(InputStories);
const { Simple: SimpleList, WithIcons } = composeStories(ListStories);
const { Simple: SimpleProgressBar } = composeStories(ProgressBarStories);
const { Simple: SimpleRadioButton } = composeStories(RadioButtonStories);
const { Simple: SimpleRange } = composeStories(RangeStories);
const { Simple: SimpleTabs } = composeStories(TabsStories);
const { Simple: SimpleTextArea } = composeStories(TextAreaStories);
const {
  Simple: SimpleTitleBar,
  Inactive,
  Complete,
} = composeStories(TitleBarStories);
const { Simple: SimpleTooltip } = composeStories(TooltipStories);
const { Simple: SimpleTree } = composeStories(TreeStories);
const { FromURL } = composeStories(VideoStories);

export default {
  title: 'All',
  // a showcase of the other stories, which are already tested on their own
  tags: ['!test'],
  parameters: {
    controls: { disable: true },
    interactions: { disable: true },
    docs: { codePanel: false },
    design: { disable: true },
  },
} satisfies Meta;

const AllDemo = () => {
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
          titleBarOptions={<TitleBar.Close key="close" onClick={closeAlert} />}
          message="The Windows password you typed is incorrect."
          buttons={[{ value: 'OK', onClick: closeAlert }]}
        />
      )}

      <br />

      <div>
        <SimpleButton />
      </div>

      <br />
      <SimpleAvatar />

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
      <div className={styles.tabs}>
        <SimpleTabs />
      </div>

      <br />
      <SimpleTree />

      <br />
      <SimpleTooltip />

      <br />
      <FromURL />

      <br />
      <SimpleTitleBar />

      <br />
      <Inactive />

      <br />
      <Complete />
    </div>
  );
};

export const All = {
  render: () => <AllDemo />,
};
