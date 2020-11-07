import styled from '@xstyled/styled-components';

const Divider = styled.li`
  height: 1px;
  border-top: 1;
  border-top-color: ${({ theme }) => theme.colors.borderDark};
  border-bottom: 1;
  border-bottom-color: ${({ theme }) => theme.colors.borderLightest};

  width: 98%;
  margin-left: 2;
`;

Divider.displayName = 'List.Divider';

export default Divider;
