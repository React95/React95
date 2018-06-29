import React from 'react';
import addons from '@storybook/addons';
import clippy from 'clippyjs';

const styles = {
  notesPanel: {
    margin: 10,
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto',
  },
};

class Clippy extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      component: '',
    };

    this.onAddNotes = this.onAddNotes.bind(this);
  }

  onAddNotes(component) {
    this.setState({ component });
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on('kadira/clippy/set_component', this.onAddNotes);

    clippy.load('Clippy', agent => {
      agent.show();
    });

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddNotes('');
    });
  }

  render() {
    const { component } = this.state;
    const componentAfterFormatted = component
      ? component.trim().replace(/\n/g, '<br />')
      : '';

    return (
      <div style={styles.notesPanel}>
        <div dangerouslySetInnerHTML={{ __html: componentAfterFormatted }} />
      </div>
    );
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener('kadira/clippy/set_component', this.onAddNotes);
  }
}

// Register the addon with a unique name.
addons.register('kadira/clippy/set_component', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('kadira/clippy/panel', {
    title: 'Clippy',
    render: () => <Clippy channel={addons.getChannel()} api={api} />,
  });
});
