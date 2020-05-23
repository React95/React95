import React, { useState, useEffect, useRef } from 'react';
import addons from '@storybook/addons';

import { Modal } from '../../../components/Modal';
import List from '../../../components/List';
import ThemeProvider from '../../../components/ThemeProvider';
import TextArea from '../../../components/TextArea';
import { useClippy, AGENTS } from '@react95/clippy';

const agentName = AGENTS[~~(Math.random() * Object.keys(AGENTS).length)];
const TALKS = [
  'PRs are always welcome!',
  'What do you think about this component?',
  'You can star this repo if you want',
  'What do you think about this project?',
];

const NewClippy = ({ channel, api }) => {
  const clippy = useClippy(agentName);
  const [compData, setCompData] = useState({});
  const [clippyButton, toggleClippyButton] = useState(false);
  const [showModal, toggleModal] = useState(false);
  const modal = useRef(null);
  const textArea = useRef(null);

  function addClippyButton() {
    const [clippyContent] = clippy._balloon._balloon;
    const btn = document.createElement('button');

    btn.setAttribute('class', 'clippy-button');
    btn.appendChild(document.createTextNode('Show me!'));
    btn.addEventListener('click', openModal);

    clippyContent.appendChild(btn);

    toggleClippyButton(true);
  }

  function openModal() {
    toggleModal(true);
  }

  function closeModal() {
    toggleModal(false);
  }

  function closeModalMenu() {
    modal._resetState();
  }

  function selectAllText() {
    textArea.select();
  }

  function copySelectedText() {
    document.execCommand('copy');
  }

  function clearCompData(data) {
    setCompData(data);
  }

  function speak() {
    if (!clippyButton) {
      addClippyButton();
    }

    const { component, code } = compData;

    if (component && code) {
      clippy.speak('Do you wanna see the code?');
      clippy.animate();
    }
  }

  useEffect(() => {
    if (clippy) {
      channel.on('clippy/set_component', clearCompData);

      const msg = TALKS[~~(Math.random() * TALKS.length)];

      clippy.play('Wave');
      clippy.speak(msg);

      clippy._el[0].addEventListener('click', () => {
        speak();
      });

      return () => {
        api.onStory(() => {
          clearCompData();
        });

        channel.removeListener('clippy/set_component', speak);
      };
    }
  }, [clippy]);

  const formattedCode = [
    `import { ${compData.component} } from '@react95/core';`,
    '',
    compData.code,
  ].join('\n');

  return (
    <ThemeProvider>
      {showModal && (
        <Modal
          icon="file_text"
          title={compData.component}
          style={{
            left: '40%',
            top: '15%',
            width: 300,
            height: 220,
            zIndex: 9,
          }}
          closeModal={closeModal}
          ref={modal}
          menu={[
            {
              name: 'File',
              list: (
                <List>
                  <List.Item onClick={closeModal}>Exit</List.Item>
                </List>
              ),
            },
            {
              name: 'Edit',
              list: (
                <List>
                  <List.Item
                    onClick={() => {
                      copySelectedText();
                      closeModalMenu();
                    }}
                  >
                    Copy
                  </List.Item>
                  <List.Divider />
                  <List.Item
                    onClick={() => {
                      selectAllText();
                      closeModalMenu();
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
            ref={textArea}
            defaultValue={formattedCode}
            rows={10}
          />
        </Modal>
      )}
    </ThemeProvider>
  );
};

class Clippy extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
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

    const agentName = this.availableAgents[
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

  setComponent = ({ component, code }) => {
    this._closeModal();
    this.setState({ component, code });
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
    const { showModal, code, component } = this.state;

    const formattedCode = [
      `import { ${component} } from '@react95/core';`,
      '',
      code,
    ].join('\n');

    return (
      <ThemeProvider>
        {showModal && (
          <Modal
            icon="file_text"
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
        )}
      </ThemeProvider>
    );
  }
}

addons.register('clippy', api => {
  addons.addPanel('clippy/panel', {
    title: 'Clippy',
    render: ({ active }) => (
      <NewClippy channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
