import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access218_32x32_4 from '../../png/Access218_32x32_4.png';

export const access218Data = {
  '32x32_4': {
    imageSrc: Access218_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access218Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access218: React.FC<Access218Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access218Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
