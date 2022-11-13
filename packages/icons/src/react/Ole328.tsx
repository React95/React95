import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Ole328_32x32_4 from '../../png/Ole328_32x32_4.png';

export const ole328Data = {
  '32x32_4': {
    imageSrc: Ole328_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Ole328Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Ole328: React.FC<Ole328Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = ole328Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
