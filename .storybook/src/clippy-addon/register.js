import React from 'react';
import addons from '@storybook/addons';
import clippy from 'clippyjs';
import { injectGlobal } from 'styled-components';

injectGlobal`
  .clippy, .clippy-balloon {
    position: fixed;
    z-index: 1000;
    cursor: pointer;
  }

  .clippy-balloon {
    background: #FFC;
    color: black;
    padding: 8px;
    border: 1px solid black;
    border-radius: 5px;
  }

  .clippy-content {
    max-width: 200px;
    min-width: 120px;
    font-family: 'Px Sans Nouveaux';
    font-size: 10pt;
  }

  .clippy-tip {
    width: 10px;
    height: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAMAAAAlvKiEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAlQTFRF///MAAAA////52QwgAAAAAN0Uk5T//8A18oNQQAAAGxJREFUeNqs0kEOwCAIRFHn3//QTUU6xMyyxii+jQosrTPkyPEM6IN3FtzIRk1U4dFeKWQiH6pRRowMVKEmvronEynkwj0uZJgR22+YLopPSo9P34wJSamLSU7lSIWLJU7NkNomNlhqxUeAAQC+TQLZyEuJBwAAAABJRU5ErkJggg==) no-repeat;
    position: absolute;
  }

  .clippy-top-left .clippy-tip {
    top: 100%;
    margin-top: 0px;
    left: 100%;
    margin-left: -50px;
  }

  .clippy-top-right .clippy-tip {
    top: 100%;
    margin-top: 0px;
    left: 0;
    margin-left: 50px;
    background-position: -10px 0;
  }

  .clippy-bottom-right .clippy-tip {
    top: 0;
    margin-top: -16px;
    left: 0;
    margin-left: 50px;
    background-position: -10px -16px;
  }

  .clippy-bottom-left .clippy-tip {
    top: 0;
    margin-top: -16px;
    left: 100%;
    margin-left: -50px;
    background-position: 0px -16px;
  }
`;

class Clippy extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      component: '',
    };

    this.agent;

    this.talks = [
      'PRs are always welcome!',
      'Nice day!',
      'What are you think about this component?',
      'You can star this repo if you want',
      'Helloo !!!',
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
  }

  componentDidMount() {
    const { channel, api } = this.props;

    channel.on('kadira/clippy/set_component', this.setComponent);

    const agentName = this.availableAgents[
      Math.floor(Math.random() * talks.length)
    ];

    clippy.load(agentName, agent => {
      this.agent = agent;

      this.agent.show();
      this.agent.play('Wave');

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
    channel.removeListener('kadira/clippy/set_component', this.setComponent);
  }

  setComponent = component => this.setState({ component });

  _speak = () => {
    const msg = talks[Math.floor(Math.random() * talks.length)];

    this.agent.speak(msg);
    this.agent.animate();
  };

  render = () => null;
}

addons.register('kadira/clippy', api => {
  addons.addPanel('kadira/clippy/panel', {
    title: 'Clippy',
    render: () => <Clippy channel={addons.getChannel()} api={api} />,
  });
});
