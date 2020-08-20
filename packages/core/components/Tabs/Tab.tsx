import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const NavItem = styled.li<{ active: Boolean }>`
  list-style: none;
  padding: 3 6;
  background-color: bg;
  box-shadow: inset 0 1px 0 0 ${th('colors.white')},
    -2px 1px 0 -1px ${th('colors.grays.2')},
    -3px 1px 0 -1px ${th('colors.white')}, -2px 0 0 -1px ${th('colors.white')},
    2px 1px 0 -1px ${th('colors.grays.3')}, 2px 0 0 -1px ${th('colors.black')},
    3px 1px 0 -1px ${th('colors.black')};
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

      box-shadow: inset 0 1px 0 0 ${th('colors.white')},
        -2px 1px 0 -1px ${th('colors.grays.2')},
        -0.5px 3px 0 0.5px ${th('colors.grays.2')},
        -2px 2px 0 0 ${th('colors.white')}, -2px 0 0 -1px ${th('colors.white')},
        1px 2px 0 0 ${th('colors.grays.3')}, 2px 0 0 -1px ${th('colors.black')},
        2px 2px 0 0 ${th('colors.black')};

      & + li {
        margin-left: 0;
        box-shadow: inset 0 1px 0 0 ${th('colors.white')},
          2px 1px 0 -1px ${th('colors.grays.3')},
          2px 0 0 -1px ${th('colors.black')},
          3px 1px 0 -1px ${th('colors.black')};
      }
    `}
`;

export interface TabProps extends React.HTMLAttributes<HTMLLIElement> {
  activeTab?: string;
  title: string;
  disabled?: Boolean;
  onClick?(e: React.MouseEvent): void;
}

const Tab: React.FC<TabProps> = ({ activeTab, title, ...rest }) => (
  <NavItem {...rest} active={activeTab === title}>
    {title}
  </NavItem>
);

export default Tab;
