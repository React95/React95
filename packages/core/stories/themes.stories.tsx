import React, { useState } from 'react';
import * as themes from '../components/ThemeProvider/theme';
import { Button, Frame } from '../components';

import { Simple as SimpleAvatar } from './avatar.stories';
import { Simple as SimpleButton } from './button.stories';
import { All as AllCheckbox } from './checkbox.stories';
import { Simple as SimpleDropdown } from './dropdown.stories';
import { Simple as SimpleFieldset } from './fieldset.stories';
import { Simple as SimpleInput } from './input.stories';
import { Simple as SimpleList, WithIcons } from './list.stories';

const ThemeWindow = ({
  name,
  changeTheme,
}: {
  name: keyof typeof themes;
  changeTheme: (theme: string) => void;
}) => {
  const selectedThemeClassName = themes[name];

  return (
    <div className={selectedThemeClassName}>
      <Frame
        width="140px"
        padding="$1"
        m="$10"
        backgroundColor="$material"
        boxShadow="$out"
      >
        <Frame
          padding="$4"
          margin="$2"
          backgroundColor="$headerBackground"
          color="$headerText"
        >
          {name}
        </Frame>
        <Frame p="$10">
          <Button
            width="100%"
            onClick={() => {
              const selectedTheme = themes[name];

              changeTheme(selectedTheme);
            }}
          >
            {name}
          </Button>
        </Frame>
      </Frame>
    </div>
  );
};

const ThemePanel = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.win95);

  return (
    <div style={{ padding: '12px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(themes).map(name => (
          <div className={name} key={name}>
            <ThemeWindow
              name={name as keyof typeof themes}
              changeTheme={setCurrentTheme}
            />
          </div>
        ))}
      </div>
      <div className={currentTheme}>
        <br />
        <br />

        <Frame display="flex" gap="$10" flexWrap="wrap">
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

          <WithIcons.render />
          <br />
          <SimpleList.render />
        </Frame>
      </div>
    </div>
  );
};

export default {
  title: 'Addon/Theme changer',
};

export const Simple = {
  render: () => <ThemePanel />,
};
