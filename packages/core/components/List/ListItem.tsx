import React, { forwardRef } from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

import { IListProps } from './List';

import rightcaret from '../GlobalStyle/imgs/rightcaret.svg';

type ItemProps = {
  icon?: boolean;
  hasList: boolean;
};

const Item = styled.li<ItemProps>`
  position: relative;

  display: flex;
  align-items: center;
  margin: 0;
  padding: 2 6;

  img {
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

    img {
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
  icon?: React.ReactElement;
} & React.HtmlHTMLAttributes<HTMLLIElement>;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ icon, children = [], ...rest }, ref) => (
    <Item
      {...rest}
      icon={!!icon}
      ref={ref}
      hasList={Boolean(
        children &&
          React.Children.map(children, child =>
            React.isValidElement<IListProps>(child),
          ).some(child => child),
      )}
    >
      {icon}
      {children}
    </Item>
  ),
);

ListItem.displayName = 'List.Item';

export default ListItem;
