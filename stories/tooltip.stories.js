import React from 'react';
import { storiesOf } from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import Tooltip from '../components/Tooltip';

function formatDate(date) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return (
    `${day.toString().padStart(2, '0')} ${monthNames[monthIndex]} ${year}`
  );
}

const code = `<Tooltip text={${formatDate(new Date())}} delay={1000}>
  <span>Hover me</span>
</Tooltip>
`;

storiesOf('Tooltip', module)
  .addDecorator(withClippy)
  .addParameters({ code })
  .add('default', () => (
    <React.Fragment>
      <br />
      <br />
      <br />
      <Tooltip>
        <span>Hover me</span>
      </Tooltip>
    </React.Fragment>
  ));
