import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Access226_32x32_4 from '../../png/Access226_32x32_4.png';

export const access226Data = {
  '32x32_4': {
    imageSrc: Access226_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Access226Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Access226: React.FC<Access226Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = access226Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
