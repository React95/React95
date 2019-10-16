import styled from 'styled-components';
import { padding, borders, shadow } from 'styled-system';

const Input = styled.input`
  outline: none;
  border: none;

  ${padding}
  ${borders}
  ${shadow}
`;

Input.defaultProps = {
  pt: 3,
  pr: 3,
  pb: 5,
  pl: 3,
  borderBottom: 0,
  borderRight: 0,
  borderTopWidth: 1,
  borderTopStyle: 1,
  borderTopColor: 'grays.3',
  borderLeftWidth: 1,
  borderLeftStyle: 1,
  borderLeftColor: 'grays.3',
  boxShadow: 'input',
};

export default Input;
