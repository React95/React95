import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import TextArea from '../components/TextArea';

class TextStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = ({ target: { value } }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return <TextArea value={value} onChange={this.handleChange} />;
  }
}

const code = '<TextArea rows={10} cols={50} />';

storiesOf('TextArea', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <TextStory />);
