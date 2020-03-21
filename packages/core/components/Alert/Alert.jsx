import React from 'react';
import PropTypes from 'prop-types';
import styled from '@xstyled/styled-components';

import Modal from '../Modal';

import {
  dialogError,
  dialogInfo,
  dialogQuestion,
  dialogWarning,
} from './alertImages';

const Dialog = styled.div`
  display: flex;
  flex-direction: row;
`;

function imageDialog({ type }) {
  const images = {
    error: dialogError,
    info: dialogInfo,
    question: dialogQuestion,
    warning: dialogWarning,
  };

  return `background-image: url(${images[type] || images.error});`;
}

Dialog.Image = styled.div`
  ${imageDialog}
  background-repeat: no-repeat;
  background-size: 70%;
  height: 45px;
  width: 45px;
  background-position: center;
  margin-right: 10;
`;

Dialog.Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Alert = ({ type, title, message, onCloseModal, closeAlert, ...rest }) => {
  const defaultPosition = {
    x: Math.floor(window.innerWidth / 2) - 150,
    y: Math.floor(window.innerHeight / 2) - 80,
  };

  return (
    <Modal
      title={title}
      closeModal={onCloseModal}
      buttonsAlignment="center"
      buttons={[{ value: 'OK', onClick: closeAlert }]}
      defaultPosition={defaultPosition}
      height={120}
      {...rest}
    >
      <Dialog>
        <Dialog.Image type={type} />
        <Dialog.Message>{message}</Dialog.Message>
      </Dialog>
    </Modal>
  );
};

Alert.displayName = 'Alert';

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'error', 'question', 'warning']),
  closeAlert: PropTypes.func,
  onCloseModal: PropTypes.func,
};

Alert.defaultProps = {
  type: 'error',
  closeAlert: () => {},
  onCloseModal: () => {},
};

export default Alert;
