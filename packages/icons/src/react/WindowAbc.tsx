import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import WindowAbc_32x32_4 from '../../png/WindowAbc_32x32_4.png';
import WindowAbc_16x16_4 from '../../png/WindowAbc_16x16_4.png';

export const windowAbcData = {
  '32x32_4': {
    imageSrc: WindowAbc_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: WindowAbc_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WindowAbcProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const WindowAbc: React.FC<WindowAbcProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = windowAbcData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
