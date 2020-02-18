import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const Wrapper = styled.div`
  width: ${props => props.width}px;
  height: 20;

  position: relative;

  text-align: center;
`;

const WhiteBar = styled.div`
  width: ${props => props.width}px;
  height: 20;
  line-height: 20px;

  border-left: 1;
  border-left-color: grays.3;

  border-top: 1;
  border-top-color: grays.3;

  background: ${th('colors.white')};
  color: ${th('colors.black')};

  ${css`
    box-shadow: inset -1px -1px 0 0 ${th('colors.grays.2')},
      inset 1px 1px 0 0 ${th('colors.black')},
      0.5px 0.5px 0 0.5px ${th('colors.white')};
  `}
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
  height: 17;
  line-height: 18px;

  margin-left: 2;
  margin-top: 2;

  background: ${th('colors.blue')};
  color: ${th('colors.white')};
`;

const ProgressBar = ({ width, percent, ...rest }) => (
  <Wrapper width={width} {...rest}>
    <WhiteBar width={width}>{`${percent}%`}</WhiteBar>
    <Container percent={percent}>
      <BlueBar width={width}>{`${percent}%`}</BlueBar>
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
