import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr124_16x16_4 from '../../png/Rsrcmtr124_16x16_4.png';

export const rsrcmtr124Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr124_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr124Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr124: React.FC<Rsrcmtr124Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr124Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
