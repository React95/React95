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
} from '@xstyled/system';

export type FrameProps = BackgroundsProps &
  ColorProps &
  FlexboxesProps &
  LayoutProps &
  PositioningProps &
  ShadowsProps &
  SpaceProps;

const Frame = styled.div<FrameProps>`
  background-color: ${({theme}) => theme.colors.material};
  ${backgrounds}
  ${color}
  ${flexboxes}
  ${layout}
  ${positioning}
  ${shadows}
  ${space}
`;

Frame.defaultProps = {
  width: 'auto',
  height: 'auto',
  boxShadow: 'out',
};

export default Frame;
