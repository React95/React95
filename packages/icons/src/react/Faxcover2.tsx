import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Faxcover2_32x32_4 from '../../png/Faxcover2_32x32_4.png';
import Faxcover2_32x32_1 from '../../png/Faxcover2_32x32_1.png';
import Faxcover2_16x16_4 from '../../png/Faxcover2_16x16_4.png';
import Faxcover2_16x16_1 from '../../png/Faxcover2_16x16_1.png';

export const faxcover2Data = {
  '32x32_4': {
    imageSrc: Faxcover2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_1': {
    imageSrc: Faxcover2_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Faxcover2_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '16x16_1': {
    imageSrc: Faxcover2_16x16_1 as string,
    width: 16,
    height: 16,
  },
};

export interface Faxcover2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_1' | '16x16_4' | '16x16_1';
}

export const Faxcover2: React.FC<Faxcover2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = faxcover2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
