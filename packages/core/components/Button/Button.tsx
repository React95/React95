import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const Button = styled.button`
  background-color: material;
  padding: 7 20 5;
  border: none;
  color: materialText;

  font-size: 12px;

  box-shadow: inset 1px 1px 0px 1px ${th('colors.borderLightest')},
    inset 0 0 0 1px ${th('colors.borderDark')},
    1px 1px 0 0px ${th('colors.borderDarkest')};

  &:disabled {
    color: materialTextDisabled;
  }

  &:focus {
    outline: ${th('space.1')}px dotted ${th('colors.materialText')};
    outline-offset: -${th('space.5')}px;

    box-shadow: inset 1px 1px 0px 1px ${th('colors.borderLightest')},
      inset -0.5px -0.5px 0px 1px ${th('colors.borderDark')},
      1px 1px 0 1px ${th('colors.borderDarkest')};
  }

  &:active {
    padding: 8 20 4;

    outline: ${th('space.1')}px dotted ${th('colors.borderDarkest')};
    outline-offset: -${th('space.5')}px;

    box-shadow: inset 0 0 0 1px ${th('colors.borderDark')},
      0 0 0 1px ${th('colors.borderDarkest')};
  }
`;

Button.defaultProps = {
  children: 'Ok',
};

export default Button;
