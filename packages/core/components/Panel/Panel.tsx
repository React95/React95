import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';
import border from './../shared-style/Border';

interface IStyledPanel {
  shadow?: 'intrude' | 'extrude' | 'in-out' | 'none';
  background?: CSS.Property.Background;
  padding?: CSS.Property.Padding;
  direction?: CSS.Property.FlexDirection;
  style?: React.CSSProperties;
  asCanvas?: boolean;
  isScrollable?: boolean;
}
export const StyledPanel = styled.section<IStyledPanel>`
  display: flex;
  flex-grow: 1;
  flex-direction: ${({ direction }) => direction};
  padding: ${({ padding }) => (padding ? padding : '12px')};
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
  ${({ shadow }) => {
    let shadowStyle;
    if (shadow == 'extrude')
      shadowStyle = border({ direction: 'extrude', useBoxShadow: true });
    else if (shadow == 'intrude')
      shadowStyle = border({ direction: 'intrude', useBoxShadow: true });
    return shadowStyle;
  }}
  &[direction="row"] > & + & {
    border-left: 0;
  }
  &[direction='column'] > & + & {
    border-top: 0;
  }
`;

const ScrollWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
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

const Panel: React.FunctionComponent<IStyledPanel> = ({
  children,
  shadow = 'intrude',
  background = undefined,
  direction = 'column',
  asCanvas = false,
  style,
  padding = '1px',
  isScrollable = true,
}) => {
  let el;
  if (shadow === 'in-out') {
    el = (
      <StyledPanel shadow="intrude" padding="4px" style={style}>
        <StyledPanel
          asCanvas={asCanvas}
          shadow="extrude"
          background={background}
          direction={direction}
          padding={padding}
        >
          <ConditonalWrapper
            condition={isScrollable}
            wrapper={children => <ScrollWrap>{children}</ScrollWrap>}
          >
            <>{children}</>
          </ConditonalWrapper>
        </StyledPanel>
      </StyledPanel>
    );
  } else {
    // intrude, extrude
    el = (
      <StyledPanel
        asCanvas={asCanvas}
        shadow={shadow}
        background={background}
        direction={direction}
        style={style}
        padding={padding}
      >
        <ConditonalWrapper
          condition={isScrollable}
          wrapper={children => <ScrollWrap>{children}</ScrollWrap>}
        >
          <>{children}</>
        </ConditonalWrapper>
      </StyledPanel>
    );
  }
  return el;
};

Panel.defaultProps = {
  shadow: 'intrude',
  background: undefined,
  direction: 'column',
};

export default Panel;
