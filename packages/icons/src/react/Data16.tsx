import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Data16_16x16_4 from '../../png/Data16_16x16_4.png';

export const data16Data = {
  '16x16_4': {
    imageSrc: Data16_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Data16Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Data16: React.FC<Data16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = data16Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
