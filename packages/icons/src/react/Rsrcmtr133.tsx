import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr133_16x16_4 from '../../png/Rsrcmtr133_16x16_4.png';

export const rsrcmtr133Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr133_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr133Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr133: React.FC<Rsrcmtr133Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr133Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
