import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ScrollingMarquee100_32x32_4 from '../../png/ScrollingMarquee100_32x32_4.png';
import ScrollingMarquee100_16x16_4 from '../../png/ScrollingMarquee100_16x16_4.png';

export const scrollingMarquee100Data = {
  '32x32_4': {
    imageSrc: ScrollingMarquee100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ScrollingMarquee100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ScrollingMarquee100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ScrollingMarquee100: React.FC<ScrollingMarquee100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = scrollingMarquee100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
