import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explorer102_32x32_4 from '../../png/Explorer102_32x32_4.png';
import Explorer102_16x16_4 from '../../png/Explorer102_16x16_4.png';

export const explorer102Data = {
  '32x32_4': {
    imageSrc: Explorer102_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Explorer102_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Explorer102Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Explorer102: React.FC<Explorer102Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = explorer102Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
