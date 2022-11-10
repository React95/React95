import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Key_32x32_4 from '../../png/Key_32x32_4.png';

export const keyData = {
  '32x32_4': {
    imageSrc: Key_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface KeyProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Key: React.FC<KeyProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = keyData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
