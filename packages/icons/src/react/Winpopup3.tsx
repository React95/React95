import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winpopup3_32x32_4 from '../../png/Winpopup3_32x32_4.png';
import Winpopup3_16x16_4 from '../../png/Winpopup3_16x16_4.png';

export const winpopup3Data = {
  '32x32_4': {
    imageSrc: Winpopup3_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Winpopup3_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Winpopup3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Winpopup3: React.FC<Winpopup3Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = winpopup3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
