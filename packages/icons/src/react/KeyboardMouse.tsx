import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import KeyboardMouse_32x32_4 from '../../png/KeyboardMouse_32x32_4.png';
import KeyboardMouse_16x16_4 from '../../png/KeyboardMouse_16x16_4.png';

export const keyboardMouseData = {
  '32x32_4': {
    imageSrc: KeyboardMouse_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: KeyboardMouse_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface KeyboardMouseProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const KeyboardMouse: React.FC<KeyboardMouseProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = keyboardMouseData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
