import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';

export class WithClippy extends React.Component {
  static propTypes = {
    component: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  };

  render() {
    const { children, component, code } = this.props;
    const channel = addons.getChannel();

    channel.emit('kadira/clippy/set_component', { component, code });

    return children;
  }
}
