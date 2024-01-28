import * as React from 'react';

import { avatar, imgStyle } from './Avatar.css';
import Frame from '../Frame';

export interface AvatarProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLDivElement>,
    'width' | 'color' | 'height'
  > {
  circle?: boolean;
  size?: number;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, srcSet, alt, circle, children, ...otherProps }, ref) => (
    <Frame className={avatar({ circle })} ref={ref} {...otherProps}>
      {src || srcSet ? (
        <img className={imgStyle} src={src} srcSet={srcSet} alt={alt} />
      ) : (
        children
      )}
    </Frame>
  ),
);

export default Avatar;
