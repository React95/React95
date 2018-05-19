import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import icons from '../components/Icon/icons';

import { storiesOf } from '@storybook/react';

const IconList = styled.ul`
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const IconBox = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

storiesOf('Icon', module).add('default', () => (
  <React.Fragment>
    <IconList>
      {Object.keys(icons).map(icon => (
        <IconBox>
          <Icon key={icon} name={icon} />
          {icon}
        </IconBox>
      ))}
    </IconList>
  </React.Fragment>
));
