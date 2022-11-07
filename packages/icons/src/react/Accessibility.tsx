import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Accessibility_64x64_1 from '../../png/Accessibility_64x64_1.png';

export const accessibilityData = {
  '64x64_1': {
    imageSrc: Accessibility_64x64_1 as string,
    width: 64,
    height: 64,
  },
};

export interface AccessibilityProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '64x64_1';
}

export const Accessibility: React.FC<AccessibilityProps> = ({
  variant = '64x64_1',
  ...rest
}) => {
  const image = accessibilityData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
