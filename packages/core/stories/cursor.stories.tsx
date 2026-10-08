import type { Meta, StoryObj } from '@storybook/react-vite';
import copy from 'copy-to-clipboard';

import { Frame } from '../components';
import { Cursor } from '../components/Cursor/Cursor.css';

export default {
  title: 'Cursor',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    interactions: { disable: true },
    docs: {
      codePanel: false,
      description: {
        component: `
\`Cursor\` has the Windows 95 cursors as CSS classes, one for each CSS cursor
(\`Cursor.Pointer\`, \`Cursor.Help\`, \`Cursor.Wait\`…). Add one to an element's
\`className\`, and the pointer changes while it's over that element:

\`\`\`tsx
import { Cursor } from '@react95/core';

<button className={Cursor.Pointer}>Click me</button>
\`\`\`

Hover over a cursor below to try it, and click it to copy its \`className\`.
`,
      },
    },
    clippy: {
      phrases: [
        'Hover over each box to try that cursor. Very 1995!',
        'Click a cursor to copy its className.',
      ],
    },
  },
} satisfies Meta<typeof Cursor>;

export const Simple: StoryObj = {
  render: (_, { speak }) => (
    <Frame
      as="ul"
      margin="0"
      padding="0"
      width="600px"
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="10px"
    >
      {Object.entries(Cursor).map(([name, className]) => (
        <Frame as="li" key={name} display="flex">
          <Frame
            as="button"
            type="button"
            className={className}
            onClick={() => {
              copy(`className={Cursor.${name}}`);
              speak(`Copied Cursor.${name} to clipboard!`);
            }}
            w="100%"
            h="50px"
            border="none"
            backgroundColor="$material"
            color="$materialText"
            boxShadow="$out"
          >
            Cursor.{name}
          </Frame>
        </Frame>
      ))}
    </Frame>
  ),

  parameters: {
    design: { disable: true },
  },
};
