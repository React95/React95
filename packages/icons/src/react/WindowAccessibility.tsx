import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import WindowAccessibility_32x32_4 from '../../png/WindowAccessibility_32x32_4.png';
import WindowAccessibility_16x16_4 from '../../png/WindowAccessibility_16x16_4.png';

export const windowAccessibilityData = {
  '32x32_4': {
    imageSrc: WindowAccessibility_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: WindowAccessibility_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WindowAccessibilityProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const WindowAccessibility: React.FC<WindowAccessibilityProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = windowAccessibilityData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
