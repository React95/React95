import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from './ListItem';
import Divider from './ListDivider';

const List = styled.ul`
  background-color: #c3c7cb;
  padding: 5px 20px 6px;
  border: none;

  margin: 0;
  padding: 2px;
  list-style: none;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 1px #000;

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
