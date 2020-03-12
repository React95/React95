import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import ListItem from './ListItem';
import Divider from './ListDivider';

const List = styled.ul`
  background-color: grays.2;
  padding: 5 20 6;
  border: none;

  margin: 0;
  padding: 2;
  list-style: none;

  box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
    inset 0 0 0 1px ${th('colors.grays.3')}, 1px 1px 0 1px ${th('colors.black')};

  ${({ width }) => `
    width: ${width}px;
  `};
`;

List.propTypes = {
  width: PropTypes.number,
};

List.defaultProps = {
  width: 200,
};

List.Item = ListItem;
List.Divider = Divider;

export default List;
