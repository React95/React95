import React, { forwardRef } from 'react';
import styled, { css, th } from '@xstyled/styled-components';

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
  border-left-color: borderDark;

  border-top: 1;
  border-top-color: borderDark;

  background-color: inputBackground;
  color: materialText;

  ${css`
    box-shadow: inset -1px -1px 0 0 ${th('colors.material')},
      inset 1px 1px 0 0 ${th('colors.borderDarkest')},
      0.5px 0.5px 0 0.5px ${th('colors.borderLightest')};
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

  background-color: progress;
  color: ${th('colors.materialTextInvert')};
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
