import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLDivElement> {
  circle?: boolean;
  size?: number;
}

const Image = styled.img`
  max-width: 100%;
`;

const StyledAvatar = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  overflow: hidden;
  margin-right: 1;
  margin-bottom: 1;

  ${({ circle, size = 48 }) => css`
    border-radius: ${circle ? '50%' : 0};

    width: ${size};
    height: ${size};
  `}

  ${({ circle }) =>
    circle
      ? css`
          border-style: solid;
          border-width: 1;
          border-top-color: borderDark;
          border-right-color: borderLightest;
          border-bottom-color: borderLightest;
          border-left-color: borderDark;
        `
      : css`
          box-shadow: in;
          padding-left: 1;
        `}
`;

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, srcSet, alt, circle, children, ...otherProps }, ref) => (
    <StyledAvatar circle={circle} ref={ref} {...otherProps}>
      {src || srcSet ? <Image src={src} srcSet={srcSet} alt={alt} /> : children}
    </StyledAvatar>
  ),
);

export default Avatar;
