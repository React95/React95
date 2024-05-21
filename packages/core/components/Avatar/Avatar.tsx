import React, { forwardRef } from 'react';
import type {
  ElementType,
  ReactElement,
  ElementRef,
  ForwardedRef,
  ImgHTMLAttributes,
} from 'react';

import { avatar, imgStyle } from './Avatar.css';
import { Frame, FrameProps } from '../Frame/Frame';

export type AvatarProps<TAs extends ElementType> = Omit<
  ImgHTMLAttributes<HTMLDivElement>,
  'width' | 'color' | 'height'
> &
  FrameProps<TAs> & {
    circle?: boolean;
  };

export const Avatar = forwardRef<HTMLDivElement, AvatarProps<'div'>>(
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
) as <TAs extends ElementType = 'div'>(
  props: AvatarProps<TAs> & { ref?: ForwardedRef<ElementRef<TAs>> },
) => ReactElement;
