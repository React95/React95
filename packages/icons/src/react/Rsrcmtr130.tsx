import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr130_16x16_4 from '../../png/Rsrcmtr130_16x16_4.png';

export const rsrcmtr130Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr130_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr130Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr130: React.FC<Rsrcmtr130Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr130Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
