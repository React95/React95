import * as React from 'react';
import styled from '@xstyled/styled-components';
import border from '../shared-style/Border';

export type ProgressBarProps = {
  width?: number;
  percent?: number;
};

const Wrapper = styled.div<Pick<ProgressBarProps, 'width'>>`
  width: ${({ width }) => width}px;
  height: 21px;
  position: relative;
  text-align: center;
  ${border({ direction: 'intrude' })}
`;

const WhiteBar = styled.div<Pick<ProgressBarProps, 'width'>>`
  width: ${({ width }) => (width || 4) - 4}px;
  height: 17px;
  line-height: 17px;
  margin: 1px 0 0 1px;
  background: ${({ theme }) => theme.colors.borderLightest};
  color: ${({ theme }) => theme.colors.borderDarkest};
`;

const Container = styled.div<Pick<ProgressBarProps, 'percent'>>`
  width: ${({ percent }) => percent}%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const Progress = styled.div<Pick<ProgressBarProps, 'width'>>`
  width: ${({ width }) => (width || 4) - 4}px;
  height: 17px;
  line-height: 17px;
  margin: 1px 0 0 1px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.borderLightest};
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  width,
  percent,
  ...rest
}) => (
  <Wrapper width={width} {...rest}>
    <WhiteBar width={width}>{`${percent}%`}</WhiteBar>
    <Container percent={percent}>
      <Progress width={width}>{`${percent}%`}</Progress>
    </Container>
  </Wrapper>
);

ProgressBar.defaultProps = {
  width: 150,
  percent: 0,
};

export default ProgressBar;
