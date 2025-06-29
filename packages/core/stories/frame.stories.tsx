import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Frame, FrameProps } from '../components/Frame/Frame';
import { contract } from '../components/themes/contract.css';

const colorsKeys = Object.keys(contract.colors).map(color => `$${color}`);
const shadowsKeys = Object.keys(contract.shadows).map(shadows => `$${shadows}`);

export default {
  title: 'Frame',
  component: Frame,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Frame is a versatile container component that supports responsive design through breakpoint-based props.

## Basic Usage

Frame supports design tokens and standard CSS values:

\`\`\`tsx
<Frame w="$20" h="$10" padding="$4">
  Using design tokens
</Frame>

<Frame w="200px" h="100px" padding="16px">
  Using CSS values
</Frame>
\`\`\`

## Responsive Usage

Pass objects with breakpoint keys to make props responsive:

\`\`\`tsx
<Frame w={{ mobile: '100%', tablet: '50%', desktop: '$20' }}>
  Responsive content with mixed tokens and CSS values
</Frame>
\`\`\`

**Breakpoints:** mobile (0px+), tablet (768px+), desktop (1024px+)

**Responsive Props:** All layout and spacing props support responsive values including \`w\`, \`h\`, \`padding\`, \`margin\`, \`display\`, etc.

**Value Types:** Both design tokens (\`$4\`, \`$20\`) and CSS values (\`100%\`, \`200px\`) work in both single and responsive formats.
        `,
      },
    },
  },
  argTypes: {
    bgColor: {
      options: colorsKeys,
      defaultValue: '$material',
    },
    backgroundColor: {
      options: colorsKeys,
    },
    color: {
      options: colorsKeys,
    },
    w: {
      control: 'text',
      description:
        'Width. Supports responsive objects: { mobile: "100%", tablet: "50%" }',
    },
    width: {
      control: 'text',
      description:
        'Width. Supports responsive objects: { mobile: "100%", tablet: "50%" }',
    },
    h: {
      control: 'text',
      description:
        'Height. Supports responsive objects: { mobile: "100px", desktop: "200px" }',
    },
    height: {
      control: 'text',
      description:
        'Height. Supports responsive objects: { mobile: "100px", desktop: "200px" }',
    },
    padding: {
      control: 'text',
      description:
        'Padding. Supports responsive objects: { mobile: "$2", desktop: "$4" }',
    },
    margin: {
      control: 'text',
      description:
        'Margin. Supports responsive objects: { mobile: "$2", desktop: "$4" }',
    },
    display: {
      control: 'text',
      description:
        'Display type. Supports responsive objects: { mobile: "block", tablet: "flex" }',
    },
    boxShadow: {
      options: shadowsKeys,
      defaultValue: '$out',
    },
  },
} as Meta<FrameProps<'div'>>;

type Story = StoryObj<FrameProps<'div'>>;

export const Simple: Story = {
  render: args => <Frame {...args} />,
  args: {
    bgColor: '$material',
    w: '200px',
    h: '100px',
    boxShadow: '$out',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBoxShadowIn = {
  render: () => (
    <Frame w="200px" h="100px" bgColor="$material" boxShadow="$in" />
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBoxShadowInOut = {
  render: () => (
    <Frame
      w="200px"
      h="100px"
      bgColor="$material"
      boxShadow="$out"
      padding="$4"
    >
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

export const WithBackgroundColor = {
  render: () => (
    <Frame
      w="200px"
      h="100px"
      bgColor="$material"
      boxShadow="$out"
      padding="$4"
    >
      <Frame h="100%" bgColor="white" boxShadow="$in" />
    </Frame>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A8',
    },
  },
};

const ResponsiveDimmensions = () => {
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = (width: number) => {
    if (width >= 1024) return 'desktop';
    if (width >= 768) return 'tablet';
    return 'mobile';
  };

  return (
    <>
      <p>
        <strong>
          Current: {windowWidth}px ({getBreakpoint(windowWidth)})
        </strong>
      </p>
      <p style={{ marginTop: '4px', fontSize: '12px' }}>
        mobile: &lt;768px | tablet: 768-1023px | desktop: ≥1024px
      </p>
    </>
  );
};

// Responsive Examples
export const ResponsiveWidth: Story = {
  render: () => (
    <>
      <ResponsiveDimmensions />
      <Frame
        w={{ mobile: '100%', tablet: '70%', desktop: '400px' }}
        h="100px"
        bgColor="$material"
        boxShadow="$out"
        padding="$4"
      >
        Resize window to see responsive width: 100% → 70% → 400px
      </Frame>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Frame width adapts to screen size: 100% on mobile, 70% on tablet, 400px on desktop',
      },
    },
  },
};

export const ResponsivePadding: Story = {
  render: () => {
    return (
      <>
        <ResponsiveDimmensions />
        <Frame
          w="300px"
          bgColor="$material"
          boxShadow="$out"
          padding={{ mobile: '$2', tablet: '$8', desktop: '$16' }}
        >
          <Frame
            bgColor="white"
            boxShadow="$in"
            padding={{ mobile: '$2', tablet: '$8', desktop: '$16' }}
          >
            <div style={{ color: 'black', fontSize: '14px' }}>
              <div>Padding increases with screen size</div>
            </div>
          </Frame>
        </Frame>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Padding increases on larger screens: $2 → $8 → $16. Window width is shown in real-time.',
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  render: () => (
    <>
      <ResponsiveDimmensions />
      <Frame
        display={{ mobile: 'block', tablet: 'flex' }}
        w="100%"
        bgColor="$material"
        boxShadow="$out"
        padding="$4"
        gap="$4"
      >
        <Frame
          w={{ mobile: '100%', tablet: '50%' }}
          h="80px"
          bgColor="white"
          boxShadow="$in"
          padding="$2"
          mb={{ mobile: '$4', tablet: '$0' }}
        >
          <div style={{ color: 'black', fontSize: '14px' }}>Panel 1</div>
        </Frame>
        <Frame
          w={{ mobile: '100%', tablet: '50%' }}
          h="80px"
          bgColor="white"
          boxShadow="$in"
          padding="$2"
        >
          <div style={{ color: 'black', fontSize: '14px' }}>Panel 2</div>
        </Frame>
      </Frame>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Layout changes from stacked on mobile to side-by-side on tablet+',
      },
    },
  },
};
