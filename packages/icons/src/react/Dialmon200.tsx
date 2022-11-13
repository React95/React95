import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Dialmon200_32x32_4 from '../../png/Dialmon200_32x32_4.png';

export const dialmon200Data = {
  '32x32_4': {
    imageSrc: Dialmon200_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Dialmon200Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Dialmon200: React.FC<Dialmon200Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = dialmon200Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
