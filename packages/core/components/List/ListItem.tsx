import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';

import Icon, { IconProps } from '../Icon/Icon';
import { IListProps } from './List';
import { createTriangleSVG } from './../shared-style/Scrollbar';

const Item = styled.li<{
  icon?: string;
  hasList: Boolean;
}>`
  position: relative;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 4px 6px 3px;

  i {
    margin-right: 10;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.headerBackground};
    color: ${({ theme }) => theme.colors.headerText};
  }

  ul {
    display: none;
    position: absolute;
    top: -2px;
    left: 97%;
    color: ${({ theme }) => theme.colors.materialText};

    i {
      width: 18px;
      height: 20px;
      margin-right: 6;
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.materialText};
  }

  ${({ icon }) => !icon && 'padding-left: 26px;'};

  ${({ hasList }) =>
    hasList &&
    css`
      &:after {
        position: absolute;
        width: 17px;
        height: 17px;
        right: 8px;

        content: '';
        background-color: transparent;
        background-image: ${({ theme }) =>
          createTriangleSVG(theme.colors.materialText, 270)};
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: 0 0;
      }

      &:hover {
        &:after {
          background-image: ${({ theme }) =>
            createTriangleSVG(theme.colors.headerText, 270)};
        }

        ul {
          display: block;
        }
      }
    `};
`;

export type ListItemProps = {
  icon?: IconProps['name'];
  small?: boolean;
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const ListItem: React.FC<ListItemProps> = ({
  icon,
  small,
  children = [],
  ...rest
}) => (
  <Item
    {...rest}
    icon={icon}
    hasList={Boolean(
      children &&
        React.Children.map(children, child =>
          React.isValidElement<IListProps>(child),
        ).some(child => child),
    )}
  >
    {icon && <Icon name={icon} size={small ? 16 : 32} />}
    {children}
  </Item>
);

ListItem.displayName = 'List.Item';

export default ListItem;
