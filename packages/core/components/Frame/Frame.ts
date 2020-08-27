import styled from 'styled-components';
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  shadow,
  ShadowProps,
  position,
  PositionProps,
} from 'styled-system';

export type FrameProps = SpaceProps &
  LayoutProps &
  ColorProps &
  FlexboxProps &
  ShadowProps &
  PositionProps;

const Frame = styled.div<FrameProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${shadow}
  ${position}
`;

Frame.defaultProps = {
  width: 'auto',
  height: 'auto',
  bg: 'bg',
  boxShadow: 'out',
};

export default Frame;
