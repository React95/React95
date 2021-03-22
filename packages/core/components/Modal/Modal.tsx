import * as React from 'react';
import * as CSS from 'csstype';
import styled, { css } from '@xstyled/styled-components';
import { th, backgroundColor, BackgroundColorProps } from '@xstyled/system';
import Draggable from 'react-draggable';

import Btn from '../shared-style/Btn';
import Button from '../Button';
import List from '../List';
import ModalContext from './ModalContext';

type WrapperProps = {
  width?: CSS.Property.Width;
  height?: CSS.Property.Height;
  active?: boolean;
};

const ModalWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  position: fixed;

  padding: 2 2 8;

  top: 50px;

  background-color: bg;

  box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
    inset 0 0 0 1px ${th('colors.grays.3')}, 1px 1px 0 1px ${th('colors.black')};

  ${({ width, height }) => `
    width: ${width ? `${width}px` : 'auto'};
    height: ${height ? `${height}px` : 'auto'};
  `}
  ${({ active }) =>
    active
      ? css`
          z-index: modal;
        `
      : ''}
`;

const TitleBar = styled.div<BackgroundColorProps>`
  height: 18px;
  margin-bottom: 2;

  color: ${th('colors.white')};
  padding: 2 2 0;

  display: flex;
  ${backgroundColor}

  img {
    width: 15px;
    height: 13px;
    margin-right: 4px;
  }
`;

const Title = styled.div`
  flex-grow: 1;
  font-weight: bold;
`;

const OptionsBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
`;

const OptionItem = styled.li`
  display: flex;
  margin-right: 2;

  &:last-child {
    margin-right: 0;
  }
`;

const Option = styled(Btn)`
  padding: 0;

  width: 17px;
  height: 14px;
  min-width: 0;

  font-size: 10;

  &:active {
    padding: 1 0 0 1;

    outline: none;
  }

  &:focus {
    box-shadow: inset 1px 1px 0px 1px ${th('colors.white')},
      inset -1px -1px 0px 1px ${th('colors.grays.3')};
  }
`;

Option.displayName = 'Option';

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding: 6;
`;

type ButtonWrapperProps = {
  buttonsAlignment?: CSS.Property.JustifyContent;
};

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ buttonsAlignment = 'center' }) => buttonsAlignment};

  padding: 0 6 6 6;

  & ${Btn} {
    margin-right: 6;
    min-width: 70px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;

  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-bottom: 3;

  border-bottom-style: solid;
  border-width: 1;
  border-bottom-color: grays.3;

  box-shadow: 0 1px 0 0 ${th('colors.grays.0')};
`;

const MenuItem = styled.li<Pick<WrapperProps, 'active'>>`
  position: relative;
  padding-left: 6;
  padding-right: 6;

  user-select: none;

  ul {
    position: absolute;
    left: 0;
    color: ${th('colors.black')};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: primary;
      color: ${th('colors.white')};
    `};
`;

MenuItem.displayName = 'MenuItem';

export type ModalButtons = {
  value: string;
  onClick(event: React.MouseEvent): void;
};

export type ModalMenu = {
  name: string;
  list: React.ReactElement<typeof List>;
};

export type ModalDefaultPosition = {
  x: number;
  y: number;
};

export type ModalProps = {
  icon?: React.ReactElement;
  closeModal(event: React.MouseEvent): void;
  title: string;
  buttons?: Array<ModalButtons>;
  menu?: Array<ModalMenu>;
  defaultPosition?: ModalDefaultPosition;
  hasWindowButton?: boolean;
} & Omit<WrapperProps, 'active'> &
  ButtonWrapperProps &
  React.HTMLAttributes<HTMLDivElement>;

const ModalRenderer = (
  {
    hasWindowButton = true,
    buttons,
    buttonsAlignment,
    children,
    closeModal,
    defaultPosition,
    height,
    icon,
    menu,
    title,
    width,
    ...rest
  }: ModalProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const {
    addWindows,
    removeWindows,
    setActiveWindow,
    activeWindow,
  } = React.useContext(ModalContext);
  const [menuOpened, setMenuOpened] = React.useState('');

  React.useEffect(() => {
    addWindows({ icon, title, hasButton: hasWindowButton });
    setActiveWindow(title);
    return () => removeWindows(title);
  }, []);

  const isActive = title === activeWindow;

  return (
    <Draggable handle=".draggable" defaultPosition={defaultPosition}>
      <ModalWrapper
        width={width}
        height={height}
        {...rest}
        onClick={() => setActiveWindow(title)}
        active={isActive}
        ref={ref}
      >
        <TitleBar backgroundColor={isActive ? 'primary' : 'grays.3'}>
          {icon}
          <Title className="draggable">{title}</Title>
          <OptionsBox>
            <OptionItem>
              <Option>?</Option>
            </OptionItem>
            <OptionItem>
              <Option onClick={closeModal}>x</Option>
            </OptionItem>
          </OptionsBox>
        </TitleBar>

        {menu && menu.length > 0 && (
          <MenuWrapper>
            {menu.map(({ name, list }) => {
              const active = menuOpened === name;
              return (
                <MenuItem
                  key={name}
                  onMouseDown={() => setMenuOpened(name)}
                  active={active}
                >
                  {name}
                  {active && list}
                </MenuItem>
              );
            })}
          </MenuWrapper>
        )}

        <Content onClick={() => setMenuOpened('')}>{children}</Content>
        {buttons && buttons.length > 0 && (
          <ButtonWrapper buttonsAlignment={buttonsAlignment}>
            {buttons.map(button => (
              <Button
                key={button.value}
                onClick={button.onClick}
                value={button.value}
              >
                {button.value}
              </Button>
            ))}
          </ButtonWrapper>
        )}
      </ModalWrapper>
    </Draggable>
  );
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(ModalRenderer);

Modal.displayName = 'Modal';

Modal.defaultProps = {
  icon: undefined,
  title: 'Modal',
  buttonsAlignment: 'flex-end',
  children: null,
  defaultPosition: { x: 0, y: 0 },
  buttons: [],
  menu: [],
  width: undefined,
  height: undefined,
  closeModal: () => {},
};
export default Modal;
