import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Faxcover3_32x32_4 from '../../png/Faxcover3_32x32_4.png';
import Faxcover3_32x32_1 from '../../png/Faxcover3_32x32_1.png';
import Faxcover3_16x16_4 from '../../png/Faxcover3_16x16_4.png';
import Faxcover3_16x16_1 from '../../png/Faxcover3_16x16_1.png';

export const faxcover3Data = {
  '32x32_4': {
    imageSrc: Faxcover3_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '32x32_1': {
    imageSrc: Faxcover3_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Faxcover3_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '16x16_1': {
    imageSrc: Faxcover3_16x16_1 as string,
    width: 16,
    height: 16,
  },
};

export interface Faxcover3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '32x32_1' | '16x16_4' | '16x16_1';
}

export const Faxcover3: React.FC<Faxcover3Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = faxcover3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
