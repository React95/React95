import React, { forwardRef } from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const NavItem = styled.li<{ active: boolean }>`
  list-style: none;
  padding: 3 6;
  background-color: material;
  box-shadow: inset 0 1px 0 0 ${th('colors.borderLightest')},
    -2px 1px 0 -1px ${th('colors.material')},
    -3px 1px 0 -1px ${th('colors.borderLightest')},
    -2px 0 0 -1px ${th('colors.borderLightest')},
    2px 1px 0 -1px ${th('colors.borderDark')},
    2px 0 0 -1px ${th('colors.borderDarkest')},
    3px 1px 0 -1px ${th('colors.borderDarkest')};
  margin-right: 2;
  margin-left: 2;

  &:first-child {
    margin-left: 4;
  }

  ${({ active }) =>
    active &&
    css`
      margin-top: -${th('space.2')}px;
      margin-left: -${th('space.2')}px;
      margin-bottom: 1;

      &:first-child {
        margin-left: 2;
      }

      box-shadow: inset 0 1px 0 0 ${th('colors.borderLightest')},
        -2px 1px 0 -1px ${th('colors.material')},
        -0.5px 3px 0 0.5px ${th('colors.material')},
        -2px 2px 0 0 ${th('colors.borderLightest')},
        -2px 0 0 -1px ${th('colors.borderLightest')},
        1px 2px 0 0 ${th('colors.borderDark')},
        2px 0 0 -1px ${th('colors.borderDarkest')},
        2px 2px 0 0 ${th('colors.borderDarkest')};

      & + li {
        margin-left: 0;
        box-shadow: inset 0 1px 0 0 ${th('colors.borderLightest')},
          2px 1px 0 -1px ${th('colors.borderDark')},
          2px 0 0 -1px ${th('colors.borderDarkest')},
          3px 1px 0 -1px ${th('colors.borderDarkest')};
      }
    `}
`;

export interface TabProps extends React.HTMLAttributes<HTMLLIElement> {
  activeTab?: string;
  title: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent): void;
}

const Tab = forwardRef<HTMLLIElement, TabProps>(
  ({ activeTab, title, ...rest }, ref) => (
    <NavItem {...rest} active={activeTab === title} ref={ref}>
      {title}
    </NavItem>
  ),
);

export default Tab;
