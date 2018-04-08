
import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../Button';

const ModalWrapper = styled.div`
  position: fixed;
  padding: 3px 2px 0 3px;
  min-width: 300px;
  min-height: 200px;

  top: 50px;

  background-color: #c3c7cb;

  box-shadow: inset 1px 1px 0px 1px #ffffff,
              inset 0 0 0 1px #868a8e,
              1px 1px 0 1px #000;
`;

const TitleBar = styled.div`
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
`

const Option = Button.extend`
  margin-right: 3px;
  padding: 0 0 0 1px;

  width: 15px;
  height: 15px;

  font-size: 15px;

  &:last-child {
    margin-right: 0;
  }

  &:active {
    padding: 1px 0 0 1px;

    outline: none;

    box-shadow: inset 0 0 0 1px #868a8e,
                0 0 0 1px #000;
  }

`;
class Modal extends React.Component {

  render() {

    const { opened, closeModal, title } = this.props;

    return (
      <React.Fragment>

      { opened && (
        <ModalWrapper>

          <TitleBar>
            <Title>{ title }</Title>
            <OptionsBox>
              <Option>?</Option>
              <Option onClick={closeModal}>x</Option>
            </OptionsBox>
          </TitleBar>

        </ModalWrapper>
      ) }

      </React.Fragment>
    );
  }
};

export default Modal;
