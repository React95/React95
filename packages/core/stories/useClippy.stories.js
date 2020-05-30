import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useClippy, ClippyProvider, AGENTS } from '@react95/clippy';
import styled from '@xstyled/styled-components';

import withClippy from '../.storybook/src/clippy-addon/clippy-addon';
import { Button, Dropdown, Frame, Fieldset, RadioButton } from '../components';

const ClippyChanger = () => {
  const initialAgent = AGENTS.CLIPPY;
  const [agent, setAgent] = useState(initialAgent);

  return (
    <Frame width={480} p={8}>
      <Fieldset legend="Agent" style={{ marginBottom: 4 }}>
        <Dropdown
          options={Object.values(AGENTS)}
          defaultValue={initialAgent}
          onChange={({ target: { value } }) => setAgent(value)}
        />
      </Fieldset>

      <ClippyProvider agentName={agent}>
        <ClippyStory />
      </ClippyProvider>
    </Frame>
  );
};

const RadioButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const ClippyStory = () => {
  const [selectedAnimation, setSelectedAnimation] = useState('Show');
  const [playing, togglePlaying] = useState(false);
  const { clippy } = useClippy();

  return clippy ? (
    <>
      <Fieldset legend="Animations">
        <RadioButtonList>
          {clippy.animations().map(animation => (
            <RadioButton
              disabled={playing}
              name={animation}
              value={animation}
              checked={selectedAnimation === animation}
              onChange={({ target: { value } }) => setSelectedAnimation(value)}
              style={{ width: 140 }}
            >
              {animation}
            </RadioButton>
          ))}
        </RadioButtonList>
      </Fieldset>

      <Button
        style={{
          marginTop: 6,
          marginLeft: 2,
        }}
        disabled={playing}
        onClick={() => {
          togglePlaying(true);
          clippy.play(selectedAnimation, undefined, () => {
            console.log('finished animation');
            togglePlaying(false);
          });
        }}
      >
        Animate
      </Button>
    </>
  ) : null;
};

const code = `const MyComponent = () => {
  const { clippy } = useClippy();

  return <Button onClick={() => clippy.play('Wave')}>Hello Clippy!</Button>
}

const App = () => (
  <ClippyProvider agentName={AGENTS.CLIPPY}>
    <MyComponent />
  </ClippyProvider>
);
`;

storiesOf('useClippy', module)
  .addDecorator(withClippy)
  .addParameters({
    code: { code, pkg: 'clippy', import: 'useClippy, ClippyProvider, AGENTS' },
  })
  .add('default', () => <ClippyChanger />);
