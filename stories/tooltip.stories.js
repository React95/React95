import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithClippy } from '../.storybook/src/clippy-addon/clippy-addon';

import Tooltip from '../components/Tooltip';

function formatDate(date) {
  var monthNames = [
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

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return (
    day.toString().padStart(2, '0') + ' ' + monthNames[monthIndex] + ' ' + year
  );
}

const code = `<Tooltip text={${formatDate(new Date())}} delay={1000}>
  <span>Hover me</span>
</Tooltip>
`;

storiesOf('Tooltip', module).add('default', () => (
  <WithClippy component="Tooltip" code={code}>
    <br />
    <br />
    <br />
    <Tooltip>
      <span>Hover me</span>
    </Tooltip>
  </WithClippy>
));
