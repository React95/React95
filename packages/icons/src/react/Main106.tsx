import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Main106_32x32_4 from '../../png/Main106_32x32_4.png';

export const main106Data = {
  '32x32_4': {
    imageSrc: Main106_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Main106Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Main106: React.FC<Main106Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = main106Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
