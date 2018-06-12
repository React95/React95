import React from 'react';
import Checkbox from '../components/Checkbox';

import { storiesOf } from '@storybook/react';

class CheckBoxStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };
  }

  handleChange = () => this.setState({ checked: !this.state.checked });

  render() {
    const { checked } = this.state;
    return (
      <Checkbox checked={checked} onChange={this.handleChange}>
        Check
      </Checkbox>
    );
  }
}

storiesOf('Checkbox', module).add('default', () => <CheckBoxStory />);
