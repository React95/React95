import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import withClippy from '../.storybook/src/clippy-addon/clippy-addon';
import RadioButton from '../components/RadioButton';

const RadioButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

class RadioButtonStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'one',
    };
  }

  handleChange = e => this.setState({ selectedOption: e.target.value });

  render() {
    const { selectedOption } = this.state;

    return (
      <RadioButtonList>
        <RadioButton
          name="working"
          value="one"
          checked={selectedOption === 'one'}
          onChange={this.handleChange}
        >

          Working
        </RadioButton>
        <RadioButton
          name="working"
          value="two"
          checked={selectedOption === 'two'}
          onChange={this.handleChange}
        >

          Working
        </RadioButton>
        <RadioButton readOnly checked value="example">

          Checked
        </RadioButton>
        <RadioButton readOnly disabled value="example">

          Disabled
        </RadioButton>
        <RadioButton readOnly checked disabled value="example">

          Checked & Disabled
        </RadioButton>
      </RadioButtonList>
    );
  }
}

const code = `<RadioButton checked>
  Checked
</RadioButton>

<RadioButton disabled>
  Disabled
</RadioButton>

<RadioButton checked disabled>
  Checked & Disabled
</RadioButton>
`;

storiesOf('RadioButton', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <RadioButtonStory />);
