import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access227_32x32_4 from '../../png/Access227_32x32_4.png';

export const access227Data = {
  '32x32_4': {
    imageSrc: Access227_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access227Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access227: React.FC<Access227Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access227Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
