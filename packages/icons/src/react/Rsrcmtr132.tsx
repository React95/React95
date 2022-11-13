import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr132_16x16_4 from '../../png/Rsrcmtr132_16x16_4.png';

export const rsrcmtr132Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr132_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr132Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr132: React.FC<Rsrcmtr132Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr132Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
