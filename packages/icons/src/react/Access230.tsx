import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access230_32x32_4 from '../../png/Access230_32x32_4.png';

export const access230Data = {
  '32x32_4': {
    imageSrc: Access230_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access230Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access230: React.FC<Access230Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access230Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
