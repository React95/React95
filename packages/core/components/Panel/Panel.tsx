import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';
import border from './../shared-style/Border';

interface IStyledPanel {
  shadow?: 'intrude' | 'extrude' | 'none';
  background?: CSS.Property.Background;
  padding?: CSS.Property.Padding;
  direction?: CSS.Property.FlexDirection;
  style?: React.CSSProperties;
  asCanvas?: boolean;
}
export const StyledPanel = styled.section<IStyledPanel>`
  display: flex;
  flex-grow: 1;
  flex-direction: ${({ direction }) => direction};
  padding: ${({ padding }) => padding};
  overflow-x: ${({ direction }) =>
    direction == 'row' || direction == 'row-reverse' ? 'auto' : 'visible'};
  overflow-y: ${({ direction }) =>
    direction == 'column' || direction == 'column-reverse'
      ? 'auto'
      : 'visible'};
  background-color: ${({ asCanvas, theme, background }) =>
    background
      ? background
      : asCanvas
      ? theme.colors.canvas
      : theme.colors.material};
  color: ${({ background, theme, asCanvas }) =>
    background || asCanvas
      ? theme.colors.canvasText
      : theme.colors.materialText};
  ${({ shadow }) => (shadow != 'none' ? border({ direction: shadow }) : '')}
  &[direction="row"] > & + & {
    border-left: 0;
  }
  &[direction='column'] > & + & {
    border-top: 0;
  }
`;

interface IScrollWrap {
  direction: CSS.Property.FlexDirection;
  padding: CSS.Property.Padding;
}
const ScrollWrap = styled.div<IScrollWrap>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  display: flex;
  padding: ${({ padding }) => padding};
  flex-direction: ${({ direction }) => direction};
`;

type ConditonalWrapperProps = {
  children: React.ReactElement;
  condition: boolean;
  wrapper: (children: React.ReactElement) => JSX.Element;
};

const ConditonalWrapper: React.FC<ConditonalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);

interface IPanel {
  shadow?: 'intrude' | 'extrude' | 'in-out' | 'none';
  background?: CSS.Property.Background;
  padding?: CSS.Property.Padding;
  direction?: CSS.Property.FlexDirection;
  style?: React.CSSProperties;
  asCanvas?: boolean;
}
const Panel: React.FunctionComponent<IPanel> = ({
  children,
  shadow = 'intrude',
  background = undefined,
  direction = 'column',
  asCanvas = false,
  style,
  padding = '12px',
}) => (
  <ConditonalWrapper
    condition={shadow == 'in-out'}
    wrapper={children => (
      <StyledPanel shadow="intrude" padding="6px">
        {children}
      </StyledPanel>
    )}
  >
    <StyledPanel
      asCanvas={asCanvas}
      shadow={shadow == 'in-out' ? 'extrude' : shadow}
      background={background}
      direction={direction}
      padding={'2px'}
      style={style}
    >
      <ScrollWrap padding={padding} direction={direction}>
        {children}
      </ScrollWrap>
    </StyledPanel>
  </ConditonalWrapper>
);

Panel.defaultProps = {
  shadow: 'intrude',
  background: undefined,
  direction: 'column',
};

export default Panel;
