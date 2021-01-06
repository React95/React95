import styled from 'styled-components';
import icons from '@react95/icons/icons.module.css';

export interface IconProps {
  name: keyof typeof icons;
}

const Icon = styled.i
  .withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
      !['name'].includes(prop) && defaultValidatorFn(prop),
  })
  .attrs<IconProps>(({ name }) => ({
    className: name,
  }))<IconProps>`
  display: block;
`;

export default Icon;
