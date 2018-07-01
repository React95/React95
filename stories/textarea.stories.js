import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

import TextArea from '../components/TextArea';

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

storiesOf('TextArea', module).add('default', () => (
  <WithClippy component="TextArea" code="<TextArea rows={10} cols={50} />">
    <TextStory />
  </WithClippy>
));
