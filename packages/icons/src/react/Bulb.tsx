import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Bulb_32x32_4 from '../../png/Bulb_32x32_4.png';

export const bulbData = {
  '32x32_4': {
    imageSrc: Bulb_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface BulbProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Bulb: React.FC<BulbProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = bulbData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
