import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explorer101_32x32_1 from '../../png/Explorer101_32x32_1.png';
import Explorer101_32x32_4 from '../../png/Explorer101_32x32_4.png';
import Explorer101_16x16_4 from '../../png/Explorer101_16x16_4.png';

export const explorer101Data = {
  '32x32_1': {
    imageSrc: Explorer101_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Explorer101_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Explorer101_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Explorer101Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4' | '16x16_4';
}

export const Explorer101: React.FC<Explorer101Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = explorer101Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
