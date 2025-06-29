import * as React from 'react';
import {
  Button,
  Checkbox,
  contract,
  Dropdown,
  Fieldset,
  Frame,
  Input,
  Tab,
  Tabs,
  TextArea,
  TitleBar,
  Tree,
} from '../components';
import { TreeProps } from '../components/Tree/Tree';
import copy from 'copy-to-clipboard';
import {
  CalcSc,
  Copy,
  FilePen,
  Files,
  Mspaint,
  Wangimg129,
} from '@react95/icons';
import type { StoryObj } from '@storybook/react';

import './contract.css';

export default {
  title: 'Contract',
};

const treeNodes: TreeProps['data'] = [
  {
    id: 0,
    label: 'space',
    icon: <CalcSc variant="16x16_4" />,
    children: Object.entries(contract.space).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Copy variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
  {
    id: 1,
    label: 'colors',
    icon: <Mspaint variant="16x16_4" />,
    children: Object.entries(contract.colors).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Copy variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
  {
    id: 2,
    label: 'zIndices',
    icon: <Files variant="16x16_4" />,
    children: Object.entries(contract.zIndices).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Copy variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
  {
    id: 3,
    label: 'shadows',
    icon: <Wangimg129 variant="16x16_4" />,
    children: Object.entries(contract.shadows).map(([key, value], id) => ({
      id,
      label: `${key}: ${value}`,
      icon: <Copy variant="16x16_4" />,
      onClick: () => {
        copy(value);
      },
    })),
  },
];

type Story = StoryObj<unknown>;

export const Theme: Story = {
  render: () => {
    return (
      <>
        <p>
          The contract theme provides a set of design tokens that can be used to
          style components consistently across your application.
        </p>
        <p>It includes tokens for spacing, colors, z-indices, and shadows.</p>
        <Frame
          width="470px"
          p="$10"
          bgColor="$material"
          boxShadow="$out"
          display="flex"
          flexDirection="column"
          gap="$8"
        >
          <Frame as="p" fontWeight="bold" mt="$0">
            Contract Theme
          </Frame>
          <Input w="240px" value="import { contract } from '@react95/core';" />
          <Frame>
            <Tree
              data={treeNodes}
              root={{
                id: -1,
                label: 'contract',
                icon: <FilePen variant="16x16_4" />,
                onClick: () => {
                  copy("import { contract } from '@react95/core';");
                },
              }}
            />
          </Frame>
        </Frame>

        <Frame
          width="470px"
          p="$10"
          bgColor="$material"
          boxShadow="$out"
          display="flex"
          flexDirection="column"
          gap="$8"
          mt="$16"
        >
          <Frame as="p" fontWeight="bold" mt="$0">
            How to use
          </Frame>
          <Fieldset legend="Code">
            <TextArea
              fontFamily="monospace"
              whiteSpace="pre-line"
              overflow="auto"
              rows={10}
              w="100%"
              value={`<div
  style={{
    color: contract.colors.materialTextInvert,
    backgroundColor: contract.colors.headerBackground,
    padding: contract.space[16],
    boxShadow: contract.shadows.in,
  }}
>
  This is a rendered example of the contract theme.
</div>`}
            />
          </Fieldset>

          <Fieldset legend="Rendered" mt="$8">
            <div
              style={{
                color: contract.colors.materialTextInvert,
                backgroundColor: contract.colors.headerBackground,
                padding: contract.space[16],
                boxShadow: contract.shadows.in,
              }}
            >
              This is a rendered example of the contract theme.
            </div>
          </Fieldset>
        </Frame>
      </>
    );
  },
  parameters: {
    design: { disable: true },
  },
};

export const CodeExamples: Story = {
  render: () => {
    return (
      <Frame
        p="$16"
        display="flex"
        flexDirection="column"
        gap="$16"
        maxWidth="700px"
      >
        <Frame as="h2" mt="$0">
          Code Usage Examples
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Using Tokens in Components
          </Frame>
          <TextArea
            fontFamily="monospace"
            whiteSpace="pre-line"
            overflow="auto"
            rows={24}
            cols={70}
            value={`import { Frame } from '@react95/core';

// Basic Frame usage with tokens
<Frame
  p="$16"                    // padding: 16px
  m="$8"                     // margin: 8px
  bgColor="$material"        // background-color: theme material color
  boxShadow="$out"           // Windows 95 raised shadow
  borderRadius="$4"          // border-radius: 4px
>
  Content
</Frame>

// Advanced layout patterns
<Frame
  display="flex"
  flexDirection="column"
  gap="$12"                  // gap: 12px between children
  p="$20"                    // padding: 20px
  maxWidth="400px"
  bgColor="$inputBackground"
  boxShadow="$in"            // inset shadow
/>`}
          />
        </Frame>
      </Frame>
    );
  },
};

export const CustomTheme: Story = {
  render: () => {
    return (
      <Frame
        p="$16"
        display="flex"
        flexDirection="column"
        gap="$16"
        maxWidth="800px"
      >
        <Frame as="h2" mt="$0">
          Creating Custom Themes
        </Frame>

        <Frame>
          <p>
            You can create custom themes by extending existing ones or creating
            completely new token sets.
          </p>
          <p>
            This example shows how to extend the Counter-Strike theme with
            custom colors.
          </p>
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Step 1: Create Theme Tokens File
          </Frame>
          <TextArea
            fontFamily="monospace"
            whiteSpace="pre-line"
            overflow="auto"
            rows={25}
            w="100%"
            value={`// custom-theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';
import { tokens as counterStrike } from '@react95/core/themes/tokens/counterStrike';

// Option 1: Global theme (affects :root)
createGlobalTheme(':root', contract, {
  ...counterStrike,
  colors: {
    ...counterStrike.colors,
    material: 'thistle',           // Custom material color
    headerBackground: 'tomato',    // Custom header color
  },
});

// Option 2: Scoped theme (affects specific class)
createGlobalTheme('.my-custom-theme', contract, {
  ...counterStrike,
  colors: {
    ...counterStrike.colors,
    material: 'lightblue',
    headerBackground: 'navy',
    materialText: 'darkblue',
  },
});`}
          />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Step 2: Import and Apply
          </Frame>
          <TextArea
            fontFamily="monospace"
            whiteSpace="pre-line"
            overflow="auto"
            rows={20}
            w="100%"
            value={`// App.tsx or your main component
import '@react95/core/GlobalStyle';
import './custom-theme.css';  // Import your custom theme

function App() {
  return (
    // Option 1: Global theme (no class needed)
    <Frame p="$16" bgColor="$material">
      <h1>My App with Custom Global Theme</h1>
    </Frame>

    // Option 2: Scoped theme (apply class)
    <div className="my-custom-theme">
      <Frame p="$16" bgColor="$material">
        <h1>My App with Scoped Custom Theme</h1>
      </Frame>
    </div>
  );
}`}
          />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Live Demo: Custom Theme
          </Frame>
          <Frame as="p" mb="$8">
            This demo uses the{' '}
            <em>
              <code>.contract-story</code>
            </em>{' '}
            class to apply a custom theme that extends Counter-Strike with
            purple material and red header colors.
          </Frame>

          {/* Demo with custom theme applied */}
          <Tabs width="500px" defaultActiveTab="Demo">
            <Tab title="Custom Theme">
              <Fieldset legend="Code">
                <TextArea
                  rows={15}
                  width={'100%'}
                  fontFamily="monospace"
                  whiteSpace="pre-line"
                  overflow="auto"
                  style={{ resize: 'none' }}
                  value={`import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';

import { tokens as cs16 } from '@react95/core/themes/tokens/counterStrike';

createGlobalTheme('.contract-story', contract, {
  ...cs16,
  colors: {
    ...cs16.colors,
    material: 'thistle',
    headerBackground: 'tomato',
  },
});
`}
                />
              </Fieldset>
            </Tab>
            <Tab title="Demo">
              <Frame boxShadow="$in" p="60px" bgColor="#5aa">
                <div className="contract-story">
                  <Frame boxShadow="$out" maxWidth="400px">
                    <TitleBar mb={0} title="Custom Theme Window">
                      <TitleBar.OptionsBox>
                        <TitleBar.Help />
                        <TitleBar.Restore />
                        <TitleBar.Close />
                      </TitleBar.OptionsBox>
                    </TitleBar>

                    <Frame p="$16" bgColor="$material">
                      <Frame as="p" mt="$0" mb="$12">
                        Notice how the material color is now{' '}
                        <strong>thistle</strong> and the header background is{' '}
                        <strong>tomato</strong> instead of the original
                        Counter-Strike colors.
                      </Frame>

                      <Frame display="flex" gap="$8">
                        <Button>Custom</Button>
                        <Input placeholder="Counter-Strike input" />
                      </Frame>
                    </Frame>
                  </Frame>
                </div>
              </Frame>
            </Tab>
          </Tabs>
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Advanced: Creating Your Own Token Set
          </Frame>
          <TextArea
            fontFamily="monospace"
            whiteSpace="pre-line"
            overflow="auto"
            rows={20}
            w="100%"
            value={`// my-theme-tokens.ts
import { theme, generateShadows } from '@react95/core/themes/baseTheme';

export const myCustomColors = {
  anchor: '#0066cc',
  anchorVisited: '#8000ff',
  borderDark: '#666666',
  borderDarkest: '#000000',
  borderLight: '#cccccc',
  borderLighter: '#e0e0e0',
  borderLightest: '#ffffff',
  canvas: '#1a1a1a',
  canvasText: '#ffffff',
  headerBackground: '#ff6b35',
  headerNotActiveBackground: '#8f8f8f',
  headerNotActiveText: '#666666',
  headerText: '#ffffff',
  material: '#f0f8ff',
  materialText: '#2c3e50',
  materialTextDisabled: '#95a5a6',
  materialTextDisabledShadow: '#ecf0f1',
  materialTextInvert: '#ffffff',
  progress: '#ff6b35',
  inputBackground: '#ffffff',
  inputBackgroundDisabled: '#f8f9fa',
};

export const myCustomTokens = {
  ...theme,
  colors: myCustomColors,
  shadows: generateShadows(myCustomColors),
};

// my-theme.css.ts
import { createGlobalTheme } from '@vanilla-extract/css';
import { contract } from '@react95/core';
import { myCustomTokens } from './my-theme-tokens';

createGlobalTheme('.my-brand-theme', contract, myCustomTokens);`}
          />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Theme Switching
          </Frame>
          <TextArea
            fontFamily="monospace"
            whiteSpace="pre-line"
            overflow="auto"
            rows={15}
            w="100%"
            value={`// Dynamic theme switching
import { useState } from 'react';
import '@react95/core/GlobalStyle';
import './theme-a.css';  // Creates .theme-a class
import './theme-b.css';  // Creates .theme-b class

function App() {
  const [currentTheme, setCurrentTheme] = useState('theme-a');

  return (
    <div className={currentTheme}>
      <Frame p="$16" bgColor="$material">
        <h1>Theme Switcher Demo</h1>

        <Frame display="flex" gap="$8" mb="$16">
          <Button
            onClick={() => setCurrentTheme('theme-a')}
          >
            Theme A
          </Button>
          <Button
          >
            Theme B
          </Button>
        </Frame>

        <Frame p="$12" bgColor="$headerBackground" color="$headerText">
          Current theme: {currentTheme}
        </Frame>
      </Frame>
    </div>
  );
}`}
          />
        </Frame>

        <Frame>
          <Frame as="h3" mb="$8">
            Best Practices
          </Frame>
          <Frame p="$12" bgColor="$material" boxShadow="$in">
            <Frame as="ul" pl="$16" m="$0">
              <li>
                <strong>Extend existing themes:</strong> Start with a base theme
                like Counter-Strike or Win95
              </li>
              <li>
                <strong>Use scoped classes:</strong> Avoid global themes unless
                you want site-wide changes
              </li>
              <li>
                <strong>Maintain contrast:</strong> Ensure text remains readable
                with custom colors
              </li>
              <li>
                <strong>Test all states:</strong> Check disabled, hover, and
                active states
              </li>
              <li>
                <strong>Keep shadows consistent:</strong> Use{' '}
                <code>generateShadows()</code> with your colors
              </li>
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    design: { disable: true },
    controls: {
      disable: true,
    },
  },
};
