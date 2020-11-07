import React from 'react'
import styled from 'styled-components'
import CSS from 'csstype'
import border from './../shared-style/Border';

interface IStyledPanel {
  shadow?: 'intrude' | 'extrude' | 'in-out',
  background?: CSS.Property.Background,
  padding?: CSS.Property.Padding,
  direction?: CSS.Property.FlexDirection,
  style?: React.CSSProperties
}
export const StyledPanel = styled.section<IStyledPanel>`
  flex-grow: 1;
  display: flex;
  flex-direction: ${({ direction }) => direction};;
  padding: ${({padding}) => padding ? padding : '12px'};
  overflow-y: auto;
  padding: 4px;
  background-color: ${({ background, theme }) => background ? background : theme.colors.material };
  ${({ shadow }) => {
    let shadowStyle
    if (shadow == 'extrude') shadowStyle = border({ direction: 'extrude'})
    else shadowStyle = border({ direction: 'intrude' })
    return shadowStyle
  }}
  &[direction="row"] > & + & {
    border-left: 0;
  }
  &[direction="column"] > & + & {
    border-top: 0;
  }
`

const Panel : React.FunctionComponent<IStyledPanel> = ({ 
  children, 
  shadow = 'intrude', 
  background = undefined, 
  direction = 'column', 
  style 
}) => {
  let el
  if (shadow === 'in-out') {
    el = 
    <StyledPanel shadow='intrude' padding='3px' style={style}>
      <StyledPanel shadow='extrude' background={background} direction={direction}>
      {children}
    </StyledPanel>
  </StyledPanel>
  } else { // intrude, extrude
    el = 
    <StyledPanel shadow={shadow} background={background} direction={direction} style={style}>
      {children}
    </StyledPanel>
  }
  return el
}

Panel.defaultProps = {
  shadow: 'intrude',
  background: undefined,
  direction: 'column'
}

export default Panel