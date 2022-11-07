import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Oiui400Textstamp_32x32_4 from '../../png/Oiui400Textstamp_32x32_4.png';

export const oiui400TextstampData = {
  '32x32_4': {
    imageSrc: Oiui400Textstamp_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Oiui400TextstampProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Oiui400Textstamp: React.FC<Oiui400TextstampProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = oiui400TextstampData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
