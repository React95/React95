import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access229_32x32_4 from '../../png/Access229_32x32_4.png';

export const access229Data = {
  '32x32_4': {
    imageSrc: Access229_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access229Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access229: React.FC<Access229Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access229Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
