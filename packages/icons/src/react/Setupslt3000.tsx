import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Setupslt3000_32x32_4 from '../../png/Setupslt3000_32x32_4.png';
import Setupslt3000_16x16_4 from '../../png/Setupslt3000_16x16_4.png';

export const setupslt3000Data = {
  '32x32_4': {
    imageSrc: Setupslt3000_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Setupslt3000_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Setupslt3000Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Setupslt3000: React.FC<Setupslt3000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = setupslt3000Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
