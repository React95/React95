import { ClippyProvider, useClippy } from '@react95/clippy';
import type { Meta } from '@storybook/react';
import copy from 'copy-to-clipboard';
import * as React from 'react';

import { Frame } from '../components';

import { icons } from '@react95/icons/src/iconDemos';
import styled from '@xstyled/styled-components';

const IconContainer = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4;
  min-width: 150px;
  border: none;
  background-color: transparent;

  i,
  :hover {
    cursor: pointer;
  }

  i {
    margin-bottom: 8;
  }

  :hover {
    box-shadow: out;
  }
`;

export default {
  title: 'Icon',
  decorators: [
    Story => (
      <ClippyProvider>
        <Story />
      </ClippyProvider>
    ),
  ],
} as Meta;

export const All = {
  render: () => {
    const [selectedIcon, setSelectedIcon] = React.useState('');
    const { clippy } = useClippy();

    const copyToClipboard = (componentName: string, variantName: string) => {
      const text = `<${componentName} variant="${variantName}"/>`;
      setSelectedIcon(text);

      copy(text);
    };

    React.useEffect(() => {
      if (selectedIcon) {
        clippy.speak('copied to clipboard!');
      }
    }, [clippy, selectedIcon]);

    return (
      <div>
        <Frame p={4}>
          <p>We have, currently, {icons.length} icons</p>
          {icons.map(({ component: Component, componentName, variants }) => {
            return (
              <>
                {Object.entries(variants).map(([variantName]) => {
                  const [size] = variantName.split('x');

                  return (
                    <IconContainer key={variantName}>
                      <Component
                        key={variantName}
                        style={{
                          display: 'inline-block',
                          marginRight: 4,
                          width: size,
                          height: size,
                        }}
                        // eslint-disable-next-line
                        variant={variantName as any}
                        onClick={() =>
                          copyToClipboard(componentName, variantName)
                        }
                      />
                      {componentName}
                      <br />
                      {variantName}
                    </IconContainer>
                  );
                })}
              </>
            );
          })}
        </Frame>
      </div>
    );
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=4%3A35',
    },
  },
};
