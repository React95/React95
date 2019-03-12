import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: 20px;

  position: relative;

  text-align: center;
`;

const WhiteBar = styled.div`
  width: ${props => props.width}px;
  height: 20px;
  line-height: 20px;

  border-left: 1px solid #868a8e;
  border-top: 1px solid #868a8e;

  background: #fff;
  color: #000;

  box-shadow: inset -1px -1px 0 0 #c3c7cb, inset 1px 1px 0 0 #000000,
    0.5px 0.5px 0 0.5px #ffffff;
`;

const Container = styled.div`
  width: ${props => props.percent}%;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;
`;

const BlueBar = styled.div`
  width: ${props => props.width}px;
  height: 17px;
  line-height: 18px;

  margin-left: 2px;
  margin-top: 2px;

  background: #000e7a;
  color: #fff;
`;

const ProgressBar = ({ width, percent }) => (
  <Wrapper width={width}>
    <WhiteBar width={width}>
      {percent}
%
    </WhiteBar>
    <Container percent={percent}>
      <BlueBar width={width}>
        {percent}
%
      </BlueBar>
    </Container>
  </Wrapper>
);

ProgressBar.propTypes = {
  width: PropTypes.number,
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  width: 150,
  percent: 0,
};

export default ProgressBar;
