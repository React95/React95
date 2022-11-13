import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Computer5_32x32_4 from '../../png/Computer5_32x32_4.png';

export const computer5Data = {
  '32x32_4': {
    imageSrc: Computer5_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Computer5Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Computer5: React.FC<Computer5Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = computer5Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
