import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access220_32x32_4 from '../../png/Access220_32x32_4.png';

export const access220Data = {
  '32x32_4': {
    imageSrc: Access220_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access220Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access220: React.FC<Access220Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access220Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
