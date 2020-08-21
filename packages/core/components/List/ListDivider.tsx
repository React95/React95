import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const Divider = styled.li`
  height: 1px;
  border-top: 1;
  border-top-color: grays.3;
  border-bottom: 1;
  border-bottom-color: ${th('colors.white')};

  width: 98%;
  margin-left: 2;
`;

Divider.displayName = 'List.Divider';

export default Divider;
