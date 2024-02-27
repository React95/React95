import React, { useState } from 'react';
import * as themes from '../components/ThemeProvider/theme';
import { Button, Frame } from '../components';

import { Simple as SimpleAvatar } from './avatar.stories';
import { Simple as SimpleButton } from './button.stories';
import { All as AllCheckbox } from './checkbox.stories';
import { Simple as SimpleDropdown } from './dropdown.stories';
import { Simple as SimpleFieldset } from './fieldset.stories';
import { Simple as SimpleInput } from './input.stories';
import { WithIcons } from './list.stories';

const ThemeWindow = ({
  name,
  changeTheme,
}: {
  name: keyof typeof themes;
  changeTheme: (theme: keyof typeof themes) => void;
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
              changeTheme(name);
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
  const [currentTheme, setCurrentTheme] =
    useState<keyof typeof themes>('win95');
  const currentThemeClassName = themes[currentTheme];

  return (
    <div style={{ padding: '12px' }}>
      <h2>Pick up a theme</h2>
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
      <Frame
        backgroundColor="$material"
        boxShadow="$out"
        padding="$6"
        width="500px"
      >
        <h3>How this works?</h3>
        <p>
          Each theme has its own set of CSS custom properties and each theme
          will return a{' '}
          <Frame
            as="code"
            fontFamily="courier new"
            paddingX="$5"
            backgroundColor="$borderLighter"
            boxShadow="$in"
          >
            className
          </Frame>{' '}
          for you to add at the top level element of your page.
        </p>
        <p>For example:</p>
        <Frame
          as="pre"
          fontFamily="courier new"
          boxShadow="$in"
          padding="$4"
          backgroundColor="white"
        >
          {`<!-- this is the className for ${currentTheme} theme -->
<div className="${currentThemeClassName}">
  <Button>Ok</Button>
</div>`}
        </Frame>
      </Frame>
      <div className={currentThemeClassName}>
        <h3>Change the theme to see the changes</h3>
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
