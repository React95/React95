import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access219_32x32_4 from '../../png/Access219_32x32_4.png';

export const access219Data = {
  '32x32_4': {
    imageSrc: Access219_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access219Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access219: React.FC<Access219Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access219Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
