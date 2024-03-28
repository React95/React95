import * as React from 'react';

import { avatar, imgStyle } from './Avatar.css';
import { Frame, FrameProps } from '../Frame/Frame';

export interface AvatarProps
  extends Omit<
      React.ImgHTMLAttributes<HTMLDivElement>,
      'width' | 'color' | 'height'
    >,
    FrameProps {
  circle?: boolean;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { src, srcSet, alt, circle, children, size = '48px', ...otherProps },
    ref,
  ) => (
    <Frame className={avatar({ circle })} ref={ref} {...otherProps} size={size}>
      {src || srcSet ? (
        <img className={imgStyle} src={src} srcSet={srcSet} alt={alt} />
      ) : (
        children
      )}
    </Frame>
  ),
);
