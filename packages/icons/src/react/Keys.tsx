import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Keys_32x32_4 from '../../png/Keys_32x32_4.png';

export const keysData = {
  '32x32_4': {
    imageSrc: Keys_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface KeysProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Keys: React.FC<KeysProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = keysData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
