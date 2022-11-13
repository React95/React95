import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explorer103_32x32_4 from '../../png/Explorer103_32x32_4.png';
import Explorer103_16x16_4 from '../../png/Explorer103_16x16_4.png';

export const explorer103Data = {
  '32x32_4': {
    imageSrc: Explorer103_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Explorer103_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Explorer103Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Explorer103: React.FC<Explorer103Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = explorer103Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
