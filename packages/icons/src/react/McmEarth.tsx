import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import McmEarth_32x32_4 from '../../png/McmEarth_32x32_4.png';

export const mcmEarthData = {
  '32x32_4': {
    imageSrc: McmEarth_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface McmEarthProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const McmEarth: React.FC<McmEarthProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mcmEarthData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
