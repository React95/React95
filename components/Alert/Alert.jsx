import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../Modal';

import { dialogError, dialogInfo, dialogWarning } from './alertImages';

const Dialog = styled.div`
  display: flex;
  flex-direction: row;
`;

function imageDialog({ type }) {
  const images = {
    error: dialogError,
    info: dialogInfo,
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
  margin-right: 10px;
`;

Dialog.Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Alert = ({ type, title, message, onCloseModal, closeAlert }) => {
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
      width="auto"
      height={120}
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
  type: PropTypes.oneOf(['info', 'error', 'warning']),
  closeAlert: PropTypes.func,
};

Alert.defaultProps = {
  type: 'error',
  closeAlert: () => {},
};

export default Alert;
