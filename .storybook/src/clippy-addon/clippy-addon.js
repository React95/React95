import React from 'react';
import addons from '@storybook/addons';

export class WithClippy extends React.Component {
  render() {
    const { children, component } = this.props;
    const channel = addons.getChannel();

    channel.emit('kadira/clippy/set_component', component);

    return children;
  }
}
