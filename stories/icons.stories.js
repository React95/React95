import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Icon from '../components/Icon';
import icons from '../components/Icon/icons';


const IconList = styled.ul`
  width: 50%;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const IconBox = styled.li`
  padding: 6px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

storiesOf('Icon', module).add('default', () => (
  <React.Fragment>
    <IconList>
      {Object.keys(icons).map(icon => (
        <IconBox key={icon}>
          <Icon name={icon} />
          {icon}
        </IconBox>
      ))}
    </IconList>
  </React.Fragment>
));
