import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import New16_16x16_4 from '../../png/New16_16x16_4.png';

export const new16Data = {
  '16x16_4': {
    imageSrc: New16_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface New16Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const New16: React.FC<New16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = new16Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
