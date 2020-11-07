import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Panel from '../components/Panel';
import Window from '../components/Window'

export default {
  title: 'Panel',
  component: Panel,
} as Meta;

const loremIpsum = 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'

export const Intruded = () =>
<Window>
  <Panel>
    <p>{loremIpsum}</p>
  </Panel>
</Window>;

export const Extruded = () =>
<Window>
  <Panel shadow='extrude'>
    <p>{loremIpsum}</p>
  </Panel>
</Window>;

export const Walled = () =>
<Window>
  <Panel shadow='in-out'>
    <p>{loremIpsum}</p>
  </Panel>
</Window>;

export const Adjacent = () =>
<Window direction='row' width='auto'>
  <Panel direction='column'>
    <Panel>
      <p>{loremIpsum}</p>
    </Panel>
    <Panel direction='row'>
      <Panel shadow='extrude'>
        <p>{loremIpsum}</p>
      </Panel>
      <Panel shadow='extrude'>
        <p>{loremIpsum}</p>
      </Panel>
    </Panel>
  </Panel>
  <Panel direction='row'>
    <Panel>
      <p>{loremIpsum}</p>
    </Panel>
    <Panel direction='column'>
      <Panel shadow='in-out'>
        <p>{loremIpsum}</p>
      </Panel>
      <Panel shadow='in-out'>
        <p>{loremIpsum}</p>
      </Panel>
    </Panel>
  </Panel>
</Window>;