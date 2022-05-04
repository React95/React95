import styled, { system, SystemProps } from '@xstyled/styled-components';

export interface FrameProps extends SystemProps {}

const Frame = styled.div<FrameProps>(system);

Frame.defaultProps = {
  w: 'auto',
  h: 'auto',
  bg: 'material',
  boxShadow: 'out',
};

export default Frame;
