import styled, { StyledComponent } from '@xstyled/styled-components';
import ListItem from './ListItem';
import Divider from './ListDivider';
import { windowBorder } from './../shared-style/Border';

type ListProps = {
  width?: Number;
};

export type IListProps = StyledComponent<'ul', any, ListProps, never> & {
  Item: typeof ListItem;
  Divider: typeof Divider;
};

const List: IListProps = Object.assign(
  styled.ul<ListProps>`
    background-color: ${({theme}) => theme.colors.material};
    padding: 5 20 6;
    border: none;

    margin: 0;
    padding: 2;
    list-style: none;

    ${windowBorder()}

    ${({ width }) => `
      width: ${width}px;
    `};
  `,
  {
    Item: ListItem,
    Divider: Divider
  },
);

List.displayName = 'List';

List.defaultProps = {
  width: 200,
};

export default List;
