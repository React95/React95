import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr100_32x32_4 from '../../png/Rsrcmtr100_32x32_4.png';
import Rsrcmtr100_16x16_4 from '../../png/Rsrcmtr100_16x16_4.png';

export const rsrcmtr100Data = {
  '32x32_4': {
    imageSrc: Rsrcmtr100_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Rsrcmtr100_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr100Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Rsrcmtr100: React.FC<Rsrcmtr100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rsrcmtr100Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
