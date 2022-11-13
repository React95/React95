import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Winfile3_32x32_1 from '../../png/Winfile3_32x32_1.png';
import Winfile3_32x32_4 from '../../png/Winfile3_32x32_4.png';

export const winfile3Data = {
  '32x32_1': {
    imageSrc: Winfile3_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Winfile3_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Winfile3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Winfile3: React.FC<Winfile3Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = winfile3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
