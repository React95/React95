import styled from '@xstyled/styled-components';
import { system, SystemProps } from '@xstyled/system';

export interface FrameProps extends SystemProps {}

const Frame = styled.div<FrameProps>(system);

Frame.defaultProps = {
  w: 'auto',
  h: 'auto',
  bg: 'material',
  boxShadow: 'out',
};

export default Frame;
