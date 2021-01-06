import styled from 'styled-components';
import { windowBorder } from './../shared-style/Border';
import CSS from 'csstype';

type pxInput =
  | number
  | CSS.Property.Width
  | CSS.Property.Height
  | CSS.Property.MinHeight
  | CSS.Property.MinWidth;
interface WindowProps {
  width?: CSS.Property.Width | number;
  height?: CSS.Property.Height | number;
  minHeight?: CSS.Property.MinHeight | number;
  minWidth?: CSS.Property.MinWidth | number;
  direction?: CSS.Property.FlexDirection;
}

const isNumeric = (input: string | number) => {
  return typeof input == 'string' && !isNaN(parseFloat(input));
};

const toPxUnits = (input: pxInput | undefined) => {
  return input && isNumeric(input.toString()) ? `${input}px` : input;
};

const Window = styled.section<WindowProps>`
  ${windowBorder()}
  background: ${({ theme }) => theme.colors.material};
  color: ${({ theme }) => theme.colors.materialText};
  width: ${({ width }) => toPxUnits(width)};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => toPxUnits(height)};
  min-height: ${({ minHeight }) => minHeight};
  padding: 3px;
  display: flex;
  flex-direction: ${({ direction }) => direction};;
`;
Window.defaultProps = {
  width: 320,
  height: 'auto',
  direction: 'column',
};

export default Window;
