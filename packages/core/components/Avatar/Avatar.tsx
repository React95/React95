import React, { forwardRef } from 'react';
import type {
  ElementType,
  ReactElement,
  ForwardedRef,
  ImgHTMLAttributes,
} from 'react';

import { avatar, imgStyle } from './Avatar.css';
import { Frame, FrameProps, InferredElement, Polymorphic } from '../Frame/Frame';
import cn from 'classnames';

export type AvatarProps<TAs extends ElementType> = Omit<
  ImgHTMLAttributes<HTMLDivElement>,
  'width' | 'color' | 'height'
> &
  Polymorphic<TAs, FrameProps> & {
    circle?: boolean;
  };

export const Avatar = forwardRef<HTMLDivElement, AvatarProps<'div'>>(
  (
    {
      src,
      srcSet,
      alt,
      circle,
      children,
      size = '48px',
      className,
      ...otherProps
    },
    ref,
  ) => (
    <Frame
      {...otherProps}
      ref={ref}
      size={size}
      className={cn(avatar({ circle }), className)}
    >
      {src || srcSet ? (
        <img className={imgStyle} src={src} srcSet={srcSet} alt={alt} />
      ) : (
        children
      )}
    </Frame>
  ),
) as <TAs extends ElementType = 'div'>(
  props: AvatarProps<TAs> & { ref?: ForwardedRef<InferredElement<TAs>> },
) => ReactElement;
