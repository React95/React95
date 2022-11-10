import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Format16_16x16_4 from '../../png/Format16_16x16_4.png';

export const format16Data = {
  '16x16_4': {
    imageSrc: Format16_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Format16Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Format16: React.FC<Format16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = format16Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
