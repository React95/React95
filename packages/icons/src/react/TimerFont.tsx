import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import TimerFont_32x32_4 from '../../png/TimerFont_32x32_4.png';

export const timerFontData = {
  '32x32_4': {
    imageSrc: TimerFont_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface TimerFontProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const TimerFont: React.FC<TimerFontProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = timerFontData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
