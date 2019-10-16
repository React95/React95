import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import Btn from '../shared-style/Btn';
import Button from '../Button';
import Icon from '../Icon';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;

  padding: 2px 2px 8px;
  ${({ width, height }) => `width: ${width}px; height: ${height}px;`}

  top: 50px;

  background-color: #c3c7cb;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 1px #000;
`;

const TitleBar = styled.div`
  height: 18px;
  margin-bottom: 2px;

  background-color: #00007f;
  color: white;
  padding: 2px 2px 0;

  display: flex;
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

const Option = styled(Btn)`
  margin-right: 2px;
  padding: 0;

  width: 17px;
  height: 14px;
  min-width: 0;

  font-size: 10px;

  &:last-child {
    margin-right: 0;
  }

  &:active {
    padding: 1px 0 0 1px;

    outline: none;
  }

  &:focus {
    box-shadow: inset 1px 1px 0px 1px #ffffff, inset -1px -1px 0px 1px #868a8e;
  }
`;

Option.displayName = 'Option';

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding: 6px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.buttonsAlignment};

  padding: 0 6px 6px 6px;

  & ${Btn} {
    margin-right: 6px;
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
  padding-bottom: 3px;

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #848284;

  box-shadow: 0 1px 0 0 #e6e6e6;
`;

const MenuItem = styled.li`
  position: relative;
  padding-left: 6px;
  padding-right: 6px;

  user-select: none;

  ul {
    position: absolute;
    left: 0;
    color: #000;
  }

  ${({ active }) =>
    active &&
    `
      background-color: #00007f;
      color: #FFF;
    `};
`;

MenuItem.displayName = 'MenuItem';

const Modal = ({
  closeModal,
  title,
  children,
  buttons,
  icon,
  menu,
  buttonsAlignment,
  defaultPosition,
  width,
  height,
  ...rest
}) => {
  const [menuOpened, setMenuOpened] = useState('');

  const iconStyle = {
    width: 15,
    height: 13,
    style: {
      marginRight: '4px',
    },
  };

  return (
    <React.Fragment>
      <Draggable handle=".draggable" defaultPosition={defaultPosition}>
        <ModalWrapper width={width} height={height} {...rest}>
          <TitleBar className="draggable">
            {icon && <Icon name={icon} {...iconStyle} />}
            <Title>{title}</Title>
            <OptionsBox>
              <Option>?</Option>
              <Option onClick={closeModal}>x</Option>
            </OptionsBox>
          </TitleBar>

          {menu.length > 0 && (
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
          {buttons.length > 0 && (
            <ButtonWrapper buttonsAlignment={buttonsAlignment}>
              {buttons.map((button, index) => (
                <Button
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  onClick={button.onClick}
                  value={button.value}
                />
              ))}
            </ButtonWrapper>
          )}
        </ModalWrapper>
      </Draggable>
    </React.Fragment>
  );
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  icon: PropTypes.string,
  closeModal: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      list: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]).isRequired,
    })
  ),
  buttonsAlignment: PropTypes.oneOf(['center', 'flex-start', 'flex-end']),
  defaultPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Modal.defaultProps = {
  icon: '',
  title: 'Modal',
  buttonsAlignment: 'flex-end',
  children: null,
  defaultPosition: { x: 0, y: 0 },
  buttons: [],
  menu: [],
  width: 300,
  height: 200,
  closeModal: () => {},
};

export default Modal;
