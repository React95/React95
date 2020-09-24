import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import Icon from '../Icon';
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
  padding: 2 6;

  i {
    margin-right: 10;
  }

  &:hover {
    background-color: primary;
    color: ${th('colors.white')};
  }

  ul {
    display: none;
    position: absolute;
    top: -2px;
    left: 97%;
    color: ${th('colors.black')};

    i {
      width: 18px;
      height: 20px;
      margin-right: 6;
    }
  }

  svg {
    fill: ${th('colors.white')};
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
        background-color: ${th('colors.black')};
        mask-image: url('${rightcaret}');
        mask-position: center center;
        mask-size: 5px 8px;
        mask-repeat: no-repeat;
      }

      &:hover {
        &:after {
          background-color: ${th('colors.white')};
        }

        ul {
          display: block;
        }
      }
    `};
`;

export type ListItemProps = {
  icon?: string;
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const ListItem: React.FC<ListItemProps> = ({
  icon,
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
    {icon && <Icon name={icon} />}
    {children}
  </Item>
);

ListItem.displayName = 'List.Item';

export default ListItem;
