import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr127_16x16_4 from '../../png/Rsrcmtr127_16x16_4.png';

export const rsrcmtr127Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr127_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr127Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr127: React.FC<Rsrcmtr127Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr127Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
