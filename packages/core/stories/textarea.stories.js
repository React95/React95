import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import TextArea from '../components/TextArea';

const TextStory = () => {
  const [text, setValue] = useState('');

  const handleChange = ({ target: { value } }) => setValue(value);

  return <TextArea value={text} onChange={handleChange} />;
};

const code = '<TextArea rows={10} cols={50} />';

storiesOf('TextArea', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => <TextStory />);
