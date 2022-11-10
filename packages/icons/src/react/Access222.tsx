import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access222_32x32_4 from '../../png/Access222_32x32_4.png';

export const access222Data = {
  '32x32_4': {
    imageSrc: Access222_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access222Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access222: React.FC<Access222Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access222Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
