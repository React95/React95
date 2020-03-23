import styled from 'styled-components';
import { space, layout, color, flexbox, shadow } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Frame = styled.div`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${shadow}
`;

Frame.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.flexbox,
  ...propTypes.shadow,
};

Frame.defaultProps = {
  w: 'auto',
  h: 'auto',
  bg: 'bg',
  boxShadow: 'out',
};

export default Frame;
