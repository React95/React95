import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr123_16x16_4 from '../../png/Rsrcmtr123_16x16_4.png';

export const rsrcmtr123Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr123_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr123Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr123: React.FC<Rsrcmtr123Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr123Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
