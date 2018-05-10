import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Draggable from 'react-draggable';
import Btn from '../shared-style/Btn';
import Button from '../Button';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  padding: 2px 3px;
  min-width: 300px;
  min-height: 200px;

  top: 50px;

  background-color: #c3c7cb;

  box-shadow: inset 1px 1px 0px 1px #ffffff, inset 0 0 0 1px #868a8e,
    1px 1px 0 1px #000;

  & * {
    cursor: default;
  }
`;

const TitleBar = styled.div`
  margin-bottom: 2px;

  background-color: #0000aa;
  color: white;
  padding: 2px 4px;

  display: flex;
`;

const Title = styled.div`
  flex-grow: 1;
`;

const OptionsBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
`;

const Option = Btn.extend`
  margin-right: 3px;
  padding: 0 0 0 1px;

  width: 15px;
  height: 15px;
  min-width: 0;

  font-size: 15px;

  &:last-child {
    margin-right: 0;
  }

  &:active {
    padding: 1px 0 0 1px;

    outline: none;

    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding: 6px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  padding: 0 6px 6px 6px;

  & ${Btn} {
    margin-right: 6px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

class Modal extends React.Component {
  render() {
    const { opened, closeModal, title, children, buttons } = this.props;

    return (
      <React.Fragment>
        {opened && (
          <Draggable handle=".draggable">
            <ModalWrapper>
              <TitleBar className="draggable">
                <Title>{title}</Title>
                <OptionsBox>
                  <Option>?</Option>
                  <Option onClick={closeModal}>x</Option>
                </OptionsBox>
              </TitleBar>

              <Content>{children}</Content>
              {buttons && (
                <ButtonWrapper>
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      onClick={button.onClick}
                      value={button.value}
                    />
                  ))}
                </ButtonWrapper>
              )}
            </ModalWrapper>
          </Draggable>
        )}
      </React.Fragment>
    );
  }
}

Modal.displayName = 'Modal';

Modal.propTypes = {
  opened: PropTypes.boolean,
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
    }),
  ),
};

Modal.defaultProps = {
  opened: false,
  closeModal: () => {},
  title: 'Modal',
  chidren: null,
  buttons: [],
};

export default Modal;
