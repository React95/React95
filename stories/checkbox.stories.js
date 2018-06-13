import React from 'react';
import styled from 'styled-components';
import Checkbox from '../components/Checkbox';

import { storiesOf } from '@storybook/react';

const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
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
      <React.Fragment>
        <CheckboxList>
          <Checkbox checked={checked} onChange={this.handleChange}>
            Working
          </Checkbox>

          <Checkbox checked={true}>Checked</Checkbox>
          <Checkbox checked={false}>Unchecked</Checkbox>
          <Checkbox disabled={true}>Disabled</Checkbox>

          <Checkbox disabled={true} checked={true}>
            Checked and Disabled
          </Checkbox>
        </CheckboxList>
      </React.Fragment>
    );
  }
}

storiesOf('Checkbox', module).add('default', () => <CheckBoxStory />);
