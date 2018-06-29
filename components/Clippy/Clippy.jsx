import React from 'react';
import clippy from 'clippyjs';

class Clippy extends React.Component {
  componentDidMount() {
    clippy.load('Clippy', agent => {
      agent.show();
    });
  }

  render() {
    return <div />;
  }
}

export default Clippy;
