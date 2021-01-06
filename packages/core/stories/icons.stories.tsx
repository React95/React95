import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import icons from '@react95/icons/icons.module.css';
import { useClippy, ClippyProvider } from '@react95/clippy';
import copy from 'copy-to-clipboard';

import { Icon, Frame } from '../components';

import availableIcons from './icons.stories.data';
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
  component: Icon,
  decorators: [
    Story => (
      <ClippyProvider>
        <Story />
      </ClippyProvider>
    ),
  ],
} as Meta;

export const All = () => {
  const [selectedIcon, setSelectedIcon] = React.useState('');
  const { clippy } = useClippy();

  function copyToClipboard(text: string) {
    setSelectedIcon(text);

    copy(`<Icon name="${text}" />`);
  }

  React.useEffect(() => {
    if (selectedIcon) {
      clippy.speak('copied to clipboard!');
    }
  }, [clippy, selectedIcon]);

  return (
    <div>
      <Frame p={4}>
        <p>We have, currently, {availableIcons.length} icons</p>

        {availableIcons.map((icon: keyof typeof icons) => (
          <IconContainer key={icon} onClick={() => copyToClipboard(icon)}>
            <Icon
              name={icon}
              style={{ display: 'inline-block', marginRight: 4 }}
              title={icon}
            />
            {icon}
          </IconContainer>
        ))}
      </Frame>
    </div>
  );
};

All.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=4%3A35',
  },
};
