import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Frame,
  Fieldset,
  contract,
  Input,
  Button,
  Dropdown,
  TextArea,
} from '../components';
import { useCopyToClipboard } from 'usehooks-ts';

import * as themes from '../components/themes/all';

const availableThemes = Object.keys(themes);

export default {
  title: 'GlobalStyle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The GlobalStyle component provides essential styling for React95 applications, including:

- **Fonts**: MS Sans Serif font family and React95 Video Numbers for authentic Windows 95 look
- **Scrollbars**: Custom styled scrollbars that match the Windows 95 aesthetic
- **Links**: Styled anchor tags with proper visited and hover states
- **CSS Reset**: Box-sizing and margin/padding normalization

## Installation & Usage

To use GlobalStyle in your project, import it in your main application file:

\`\`\`js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css'; // Choose your preferred theme
\`\`\`

**Note**: GlobalStyle should be imported **before** any theme to ensure proper styling cascade.

## What GlobalStyle Provides

### 1. Typography
- Sets MS Sans Serif as the default font family
- Normalizes font sizes and weights

### 2. Scrollbars
- Custom webkit scrollbar styling
- Windows 95-style scrollbar tracks and thumbs
- Directional arrow buttons with proper styling

### 3. Base Styles
- CSS reset for consistent rendering
- Proper box-sizing for all elements
- Link styling that matches the Windows 95 theme

### 4. Global Normalization
- Removes default margins and padding
- Sets consistent font rendering
- Establishes proper color inheritance

## Theme Integration

GlobalStyle works with all React95 themes. The styles automatically adapt to the selected theme's color scheme through CSS custom properties defined in the theme contract.
        `,
      },
    },
  },
} as Meta;

type Story = StoryObj;

export const UsageInstructions: Story = {
  render: (_, { speak }) => {
    const [__, copyToClipboard] = useCopyToClipboard();
    const [selectedTheme, setSelectedTheme] = React.useState('win95');

    return (
      <Frame p="$20" maxWidth="800px">
        <h1>How to Use GlobalStyle</h1>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>1. Installation</h2>
          <p>
            GlobalStyle is included with @react95/core. No separate installation
            needed.
          </p>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>2. Import in Your App</h2>
          <p>
            Add this import to your main application file (usually App.js or
            index.js):
          </p>

          <Frame display={'flex'} gap="$4">
            <Input
              w="100%"
              fontFamily="monospace"
              maxWidth={'300px'}
              value="import '@react95/core/GlobalStyle';"
            />
            <Button
              onClick={() => {
                copyToClipboard("import '@react95/core/GlobalStyle';");

                speak('Copied GlobalStyle import to clipboard!');
              }}
            >
              Copy
            </Button>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>3. Choose a Theme</h2>
          <p>Import a theme after GlobalStyle to complete the setup:</p>

          <Frame>
            <Fieldset legend="Select Theme">
              <p>
                Choose a theme from the dropdown below. This will apply the
                selected theme's styles globally.
              </p>
              <Dropdown
                value={selectedTheme}
                onChange={e => {
                  const theme = (e.target as HTMLSelectElement).value;

                  setSelectedTheme(theme);
                }}
                options={availableThemes}
              />
              <p>
                After selecting a theme, import it in your main file to apply
                the styles.
              </p>
              <Frame mt="$8" display="flex" gap="$4">
                <Input
                  fontFamily="monospace"
                  w="100%"
                  maxWidth={'300px'}
                  value={`import '@react95/core/themes/${selectedTheme}.css';`}
                />
                <Button
                  onClick={() => {
                    copyToClipboard(
                      `import '@react95/core/themes/${selectedTheme}.css';`,
                    );

                    speak(`Copied ${selectedTheme} theme import to clipboard!`);
                  }}
                >
                  Copy
                </Button>
              </Frame>
            </Fieldset>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>4. Complete Example</h2>
          <TextArea
            whiteSpace="pre-line"
            rows={16}
            cols={50}
            fontFamily="monospace"
          >
            {`// App.js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { Button, Frame } from '@react95/core';

function App() {
  return (
    <Frame>
      <h1>My React95 App</h1>
      <Button>Click me!</Button>
    </Frame>
  );
}

export default App;`}
          </TextArea>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>5. Important Notes</h2>
          <Frame as="ul" pl="$20">
            <li>Always import GlobalStyle before any theme</li>
            <li>Only import GlobalStyle once in your application</li>
            <li>
              GlobalStyle affects the entire document, not just React95
              components
            </li>
            <li>
              You can override specific styles if needed using CSS specificity
            </li>
          </Frame>
        </Frame>
      </Frame>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
This story provides step-by-step instructions for implementing GlobalStyle in your React95 application.
Follow these steps to ensure proper styling and the authentic Windows 95 experience.
        `,
      },
    },
  },
};

export const Overview: Story = {
  render: () => {
    return (
      <Frame maxWidth="600px">
        <Frame mb="$16">
          <p>
            This demo shows how GlobalStyle affects various elements throughout
            your application. The styles are automatically applied globally when
            you import GlobalStyle.
          </p>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$20">
          <Fieldset legend="Typography">
            <Frame as="p" mb="$12">
              This text uses the MS Sans Serif font family provided by
              GlobalStyle. It includes proper font weights and spacing.
            </Frame>
            <p>
              <strong>Bold text</strong> and <em>italic text</em> are also
              properly styled.
            </p>
          </Fieldset>

          <Fieldset legend="Links" mt="$18">
            <p>
              <a href="#" onClick={e => e.preventDefault()}>
                This is a normal link
              </a>
            </p>
            <Frame as="p" mt="$8">
              <a
                href="#"
                onClick={e => e.preventDefault()}
                style={{ color: contract.colors.anchorVisited }}
              >
                This simulates a visited link
              </a>
            </Frame>
          </Fieldset>

          <Fieldset legend="Scrollable Content" mt="$18">
            <Frame
              h="150px"
              overflow="auto"
              bgColor="$inputBackground"
              p="$8"
              boxShadow="$in"
            >
              <p>
                This container demonstrates the custom scrollbar styling
                provided by GlobalStyle. The scrollbars have a Windows 95
                aesthetic with proper track, thumb, and button styling.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </Frame>
          </Fieldset>
        </Frame>
      </Frame>
    );
  },
};

export const FontsDemo: Story = {
  render: () => {
    return (
      <Frame p="$20" maxWidth="800px">
        <h1>Font Families in GlobalStyle</h1>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>MS Sans Serif (Default)</h2>
          <p>
            This is the main font family used throughout React95 components. It
            provides the authentic Windows 95 look and feel.
          </p>
          <Frame mt="$12" display="flex" flexDirection="column" gap="$8">
            <Frame fontSize="16px">
              <p>Larger text (16px)</p>
            </Frame>
            <Frame fontSize="12px">
              <p>Standard text (12px)</p>
            </Frame>
            <Frame fontSize="10px">
              <p>Small text (10px)</p>
            </Frame>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>React95Video-Numbers</h2>
          <p>
            The React95Video-Numbers font was specifically designed for use in
            the Video component but feel free to use it anywhere you want.
          </p>
          <Frame
            mt="$12"
            fontFamily="React95Video-Numbers, monospace"
            fontSize="24px"
            bgColor="$canvas"
            color="$canvasText"
            p="$8"
            textAlign="center"
            boxShadow="$in"
          >
            01234567890
          </Frame>
          <Frame mt="$8" fontSize="12px">
            <p>
              Perfect for creating retro digital displays, counters, and
              terminal-like interfaces.
            </p>
          </Frame>
        </Frame>

        <Frame boxShadow="$out" bgColor="$material" p="$16" mt="$16">
          <h2>Font Weights</h2>
          <Frame>
            <Frame fontWeight="normal">
              <p>Normal weight text</p>
            </Frame>
            <Frame fontWeight="bold">
              <p>Bold weight text</p>
            </Frame>
            <p>
              <strong>Strong element (bold)</strong>
            </p>
            <p>
              <em>Emphasized element (italic)</em>
            </p>
          </Frame>
        </Frame>
      </Frame>
    );
  },
};
