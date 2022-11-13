import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access224_32x32_4 from '../../png/Access224_32x32_4.png';

export const access224Data = {
  '32x32_4': {
    imageSrc: Access224_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access224Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access224: React.FC<Access224Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access224Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
