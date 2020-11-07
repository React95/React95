import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';

import Icon, { IconProps } from '../Icon/Icon';
import { IListProps } from './List';

import rightcaret from '../shared/assets/pattern/rightcaret.svg';

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
    color: ${({ theme }) => theme.colors.borderLightest};
  }

  ul {
    display: none;
    position: absolute;
    top: -2px;
    left: 97%;
    color: ${({ theme }) => theme.colors.borderDarkest};

    i {
      width: 18px;
      height: 20px;
      margin-right: 6;
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.borderLightest};
  }

  ${({ icon }) => !icon && 'padding-left: 26px;'};

  ${({ hasList }) =>
    hasList &&
    css`
      &:after {
        position: absolute;
        width: 5px;
        height: 8px;
        right: 8px;

        content: '';
        background-color: ${({ theme }) => theme.colors.borderDarkest};
        mask-image: url('${rightcaret}');
        mask-position: center center;
        mask-size: 5px 8px;
        mask-repeat: no-repeat;
      }

      &:hover {
        &:after {
          background-color: ${({ theme }) => theme.colors.borderLightest};
        }

        ul {
          display: block;
        }
      }
    `};
`;

export type ListItemProps = {
  icon?: IconProps['name'];
  small?: boolean
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
    {icon && <Icon name={icon} size={ small ? 16 : 32} />}
    {children}
  </Item>
);

ListItem.displayName = 'List.Item';

export default ListItem;
