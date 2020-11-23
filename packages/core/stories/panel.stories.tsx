import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Panel from '../components/Panel';
import Window from '../components/Window';

export default {
  title: 'Panel',
  component: Panel,
} as Meta;

const loremIpsum = (styleName: string) => (
  <p>
    <span
      style={{
        padding: '4px',
        color: 'darkblue',
        fontSize: '2em',
        fontWeight: 900,
      }}
    >
      {styleName}
    </span>
    On the other hand, we denounce with righteous indignation and dislike men
    who are so beguiled and demoralized by the charms of pleasure of the moment,
    so blinded by desire, that they cannot foresee the pain and trouble that are
    bound to ensue; and equal blame belongs to those who fail in their duty
    through weakness of will, which is the same as saying through shrinking from
    toil and pain.These cases are perfectly simple and easy to distinguish. In a
    free hour, when our power of choice is untrammelled and when nothing
    prevents our being able to do what we like best, every pleasure is to be
    welcomed and every pain avoided.
  </p>
);

export const Intruded = () => (
  <Window>
    <Panel>{loremIpsum('intrude')}</Panel>
  </Window>
);

export const Extruded = () => (
  <Window>
    <Panel shadow="extrude">{loremIpsum('extrude')}</Panel>
  </Window>
);

export const Walled = () => (
  <Window>
    <Panel shadow="in-out">{loremIpsum('in-out')}</Panel>
  </Window>
);

export const asCanvas = () => (
  <Window>
    <Panel shadow="intrude" asCanvas={true}>
      {loremIpsum('asCanvas + intrude')}
    </Panel>
  </Window>
);

export const Adjacent = () => (
  <Window direction="row" width="auto">
    <Panel direction="column" shadow="none">
      <Panel>{loremIpsum('intrude')}</Panel>
      <Panel shadow="in-out">{loremIpsum('in-out')}</Panel>
      <Panel direction="row" shadow="none">
        <Panel asCanvas={true} shadow="extrude">
          {loremIpsum('extrude asCanvas')}
        </Panel>
        <Panel shadow="extrude">{loremIpsum('extrude')}</Panel>
        <Panel shadow="none">{loremIpsum('none')}</Panel>
        <Panel asCanvas={true} shadow="intrude">
          {loremIpsum('intrude asCanvas')}
        </Panel>
        <Panel shadow="intrude">{loremIpsum('intrude')}</Panel>
      </Panel>
    </Panel>
  </Window>
);
