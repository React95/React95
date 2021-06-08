import styled from 'styled-components';
import {
  backgrounds,
  BackgroundsProps,
  color,
  ColorProps,
  flexboxes,
  FlexboxesProps,
  layout,
  LayoutProps,
  positioning,
  PositioningProps,
  shadows,
  ShadowsProps,
  space,
  SpaceProps,
  overflow,
  OverflowProps,
} from '@xstyled/system';

export type FrameProps = BackgroundsProps &
  ColorProps &
  FlexboxesProps &
  LayoutProps &
  PositioningProps &
  ShadowsProps &
  SpaceProps &
  OverflowProps;

const Frame = styled.div<FrameProps>`
  ${backgrounds}
  ${color}
  ${flexboxes}
  ${layout}
  ${positioning}
  ${shadows}
  ${space}
  ${overflow}
`;

Frame.defaultProps = {
  width: 'auto',
  height: 'auto',
  bg: 'material',
  boxShadow: 'out',
};

export default Frame;
