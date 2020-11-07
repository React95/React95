import styled from '@xstyled/styled-components';
import  { border } from './Border';

export default styled.button`
  background-color: ${({theme}) => theme.colors.material};
  padding: 7 20 5;
  border: none;
  font-size: 12px;
  ${border()};
  &:disabled {
    color: ${({ theme }) => theme.colors.borderDarkest};
  }
  &:focus {
    outline: ${({ theme }) => theme.space[1]}px dotted ${({ theme }) => theme.colors.borderDarkest};
    outline-offset: -${({ theme }) => theme.space[5]}px;
  }
  &:active {
    outline: ${({ theme }) => theme.space[1]}px dotted ${({ theme }) => theme.colors.borderDarkest};
    outline-offset: -${({ theme }) => theme.space[5]}px;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.borderDark},
      0 0 0 1px ${({ theme }) => theme.colors.borderDarkest};
  }
`;
