import React, { forwardRef } from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

export type ProgressBarProps = {
  width?: number;
  percent?: number;
};

const Wrapper = styled.div<Pick<ProgressBarProps, 'width'>>`
  width: ${({ width }) => width}px;
  height: 20px;

  position: relative;

  text-align: center;
`;

const WhiteBar = styled.div<Pick<ProgressBarProps, 'width'>>`
  width: ${({ width }) => width}px;
  height: 20px;
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

const Container = styled.div<Pick<ProgressBarProps, 'percent'>>`
  width: ${({ percent }) => percent}%;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;
`;

const Progress = styled.div<Pick<ProgressBarProps, 'width'>>`
  width: ${({ width }) => width}px;
  height: 17px;
  line-height: 18px;

  margin-left: 2;
  margin-top: 2;

  background-color: primary;
  color: ${th('colors.white')};
`;

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ width, percent, ...rest }, ref) => (
    <Wrapper width={width} {...rest} ref={ref}>
      <WhiteBar width={width}>{`${percent}%`}</WhiteBar>
      <Container percent={percent}>
        <Progress width={width}>{`${percent}%`}</Progress>
      </Container>
    </Wrapper>
  ),
);

ProgressBar.defaultProps = {
  width: 150,
  percent: 0,
};

export default ProgressBar;
