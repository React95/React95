import type { Meta, StoryObj } from '@storybook/react';
import copy from 'copy-to-clipboard';
import * as React from 'react';

import { Frame, Button } from '../components';

import { icons } from '@react95/icons/src/iconDemos';

import * as styles from './icons.stories.css';

export default {
  title: 'Icon',
} as Meta;

type Story = StoryObj<unknown>;

export const All: Story = {
  render: (_, { speak }) => {
    const copyToClipboard = (componentName: string, variantName: string) => {
      const text = `<${componentName} variant="${variantName}"/>`;
      copy(text);

      speak('Copied to clipboard!');
    };

    return (
      <div>
        <p>We have, currently, {icons.length} icons</p>
        <Frame
          p="$12"
          display="flex"
          flexWrap="wrap"
          gap="4px"
          boxShadow="$out"
          backgroundColor="$material"
        >
          {icons.map(({ component: Component, componentName, variants }) => {
            return (
              <React.Fragment key={componentName}>
                {Object.entries(variants).map(([variantName]) => {
                  const [size] = variantName.split('x');

                  return (
                    <Button
                      key={variantName}
                      className={styles.btn}
                      onClick={() =>
                        copyToClipboard(componentName, variantName)
                      }
                    >
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
                      />
                      {componentName}
                      <br />
                      {variantName}
                    </Button>
                  );
                })}
              </React.Fragment>
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
