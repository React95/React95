import React from 'react';
import addons from '@storybook/addons';
import clippy from 'clippyjs';
import { FileText } from '@react95/icons';

import { Modal } from '../../../components/Modal';
import List from '../../../components/List';
import TextArea from '../../../components/TextArea';

class Clippy extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      pkg: 'core',
      component: '',
      code: '',
      clippyButton: false,
      showModal: false,
    };

    this.agent;

    this.talks = [
      'PRs are always welcome!',
      'What do you think about this component?',
      'You can star this repo if you want',
      'What do you think about this project?',
    ];

    this.availableAgents = [
      'Bonzi',
      'Clippy',
      'F1',
      'Genie',
      'Genius',
      'Links',
      'Merlin',
      'Peedy',
      'Rocky',
      'Rover',
    ];

    this.textArea = React.createRef();
    this.modal = React.createRef();
  }

  componentDidMount() {
    const { channel, api } = this.props;

    channel.on('clippy/set_component', this.setComponent);

    const agentName =
      this.availableAgents[
        Math.floor(Math.random() * this.availableAgents.length)
      ];

    clippy.load(agentName, agent => {
      this.agent = agent;

      this.agent.show();
      this.agent.play('Wave');

      const msg = this.talks[Math.floor(Math.random() * this.talks.length)];
      this.agent.speak(msg);

      this.agent._el[0].addEventListener('click', this._speak);
    });

    this.stopListeningOnStory = api.onStory(() => {
      this.setComponent('');
    });
  }

  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener('clippy/set_component', this._speak);
  }

  setComponent = ({ component, code, pkg = 'core' }) => {
    this._closeModal();
    this.setState({ component, code, pkg });
  };

  _showMeTheCode = () => this._openModal();

  _speak = () => {
    if (!this.state.clippyButton) {
      this._addClippyButton();
    }

    const { component, code } = this.state;

    if (component && code) {
      this.agent.speak('Do you wanna see the code?');
    }

    this.agent.animate();
  };

  _addClippyButton = () => {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'clippy-button');
    const btnText = document.createTextNode('Show me!');
    btn.appendChild(btnText);

    btn.addEventListener('click', this._showMeTheCode);

    const clippyContent = this.agent._balloon._balloon[0];
    clippyContent.appendChild(btn);

    this.setState({ clippyButton: true });
  };

  _openModal = () => this.setState({ showModal: true });

  _closeModal = () => this.setState({ showModal: false });

  _closeModalMenu = () => this.modal._resetState();

  _selectAllText = () => this.textArea.select();

  _copySelectedText = () => document.execCommand('copy');

  render() {
    const { showModal, code, component, pkg } = this.state;

    const formattedCode = [
      `import { ${component} } from '@react95/${pkg}';`,
      '',
      code,
    ].join('\n');

    return showModal ? (
      <Modal
        icon={<FileText variant="16x16_4" />}
        title={component}
        style={{
          left: '40%',
          top: '15%',
          width: 300,
          height: 220,
          zIndex: 9,
        }}
        closeModal={this._closeModal}
        ref={modal => (this.modal = modal)}
        menu={[
          {
            name: 'File',
            list: (
              <List>
                <List.Item onClick={this._closeModal}>Exit</List.Item>
              </List>
            ),
          },
          {
            name: 'Edit',
            list: (
              <List>
                <List.Item
                  onClick={() => {
                    this._copySelectedText();
                    this._closeModalMenu();
                  }}
                >
                  Copy
                </List.Item>
                <List.Divider />
                <List.Item
                  onClick={() => {
                    this._selectAllText();
                    this._closeModalMenu();
                  }}
                >
                  Select All
                </List.Item>
              </List>
            ),
          },
        ]}
      >
        <TextArea
          readOnly
          ref={textArea => (this.textArea = textArea)}
          defaultValue={formattedCode}
          rows={10}
        />
      </Modal>
    ) : null;
  }
}

addons.register('clippy', api => {
  addons.addPanel('clippy/panel', {
    title: 'Clippy',
    render: ({ active }) => (
      <Clippy channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
