import React from 'react';
import TextArea from '../components/TextArea';

import { storiesOf } from '@storybook/react';

class TextStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  _handleChange = ({ target }) => this.setState({ value: target.value });

  render() {
    return <TextArea value={this.state.value} onChange={this._handleChange} />;
  }
}

storiesOf('TextArea', module).add('default', () => <TextStory />);
