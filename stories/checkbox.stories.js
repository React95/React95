import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Checkbox from '../components/Checkbox';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;

const code = `<Checkbox checked={true}>
  Checked
</Checkbox>
<Checkbox checked={false}>
  Unchecked
</Checkbox>
<Checkbox disabled={true}>
  Disabled
</Checkbox>
`;

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
      <CheckboxList>
        <Checkbox checked={checked} onChange={this.handleChange}>

          Working
        </Checkbox>

        <Checkbox checked>Checked</Checkbox>
        <Checkbox checked={false}>Unchecked</Checkbox>
        <Checkbox disabled>Disabled</Checkbox>

        <Checkbox disabled checked>

          Checked and Disabled
        </Checkbox>
      </CheckboxList>
    );
  }
}

storiesOf('Checkbox', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <CheckBoxStory />);
