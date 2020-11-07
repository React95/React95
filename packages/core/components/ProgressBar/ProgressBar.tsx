import * as React from 'react';
import styled from '@xstyled/styled-components';

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
  padding: 1px 0 0 5px;
  background: ${({ theme }) => theme.colors.borderLightest};
  color: ${({ theme }) => theme.colors.borderDarkest};
  box-shadow: inset 1px 1px 0px 0px ${({ theme }) => theme.colors.borderDark},
    inset 1px 1px 0px 1px ${({ theme }) => theme.colors.borderDarkest},
    inset 0 0 0 1px ${({ theme }) => theme.colors.borderLight}, 
    1px 1px 0 0px ${({ theme }) => theme.colors.borderLightest};
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
