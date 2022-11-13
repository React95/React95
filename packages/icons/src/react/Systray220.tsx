import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Systray220_16x16_4 from '../../png/Systray220_16x16_4.png';

export const systray220Data = {
  '16x16_4': {
    imageSrc: Systray220_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Systray220Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Systray220: React.FC<Systray220Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = systray220Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
