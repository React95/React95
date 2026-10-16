import type { Meta, StoryObj } from '@storybook/react-vite';
import copy from 'copy-to-clipboard';
import * as React from 'react';

import { Frame, Button } from '../components';

import { icons } from '@react95/icons/src/iconDemos';

import * as styles from './icons.stories.css';

export default {
  title: 'Icon',
  // the icons come from @react95/icons, which has its own tests
  tags: ['!test'],
} satisfies Meta;

type Story = StoryObj<unknown>;

type Icon = (typeof icons)[number];

const IconGrid = ({
  icons,
  speak,
}: {
  icons: Icon[];
  speak: (message: string) => void;
}) => {
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
                    onClick={() => copyToClipboard(componentName, variantName)}
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
};

const parameters: Story['parameters'] = {
  // the JSX generated from ~1500 rendered icons is huge and freezes the UI
  docs: { codePanel: false },
  controls: { disable: true },
  interactions: { disable: true },
  clippy: {
    phrases: ['Click any icon to copy its JSX to your clipboard.'],
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=4%3A35',
  },
};

export const All: Story = {
  render: (_, { speak }) => <IconGrid icons={icons} speak={speak} />,
  parameters,
};

const internetExplorer4 = [
  'Icwconn1200',
  'Icwconn1202',
  'Ie',
  'Iexplore32528',
  'Iexplore32529',
  'Iexplore32537',
  'Iexplore32542',
  'Iexplore32548',
  'Iexplore32549',
  'Iexplore32550',
  'Iexplore32554',
  'Runonce106',
  'SetupPhoneicon',
];

export const InternetExplorer4: Story = {
  name: 'Internet Explorer 4',
  render: (_, { speak }) => (
    <IconGrid
      icons={icons.filter(({ componentName }) =>
        internetExplorer4.includes(componentName),
      )}
      speak={speak}
    />
  ),
  parameters,
};
