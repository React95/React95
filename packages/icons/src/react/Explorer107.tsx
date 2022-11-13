import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explorer107_32x32_4 from '../../png/Explorer107_32x32_4.png';

export const explorer107Data = {
  '32x32_4': {
    imageSrc: Explorer107_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Explorer107Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Explorer107: React.FC<Explorer107Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = explorer107Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
