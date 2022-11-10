import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Oiui400Imgstamp_32x32_4 from '../../png/Oiui400Imgstamp_32x32_4.png';

export const oiui400ImgstampData = {
  '32x32_4': {
    imageSrc: Oiui400Imgstamp_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Oiui400ImgstampProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Oiui400Imgstamp: React.FC<Oiui400ImgstampProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = oiui400ImgstampData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
