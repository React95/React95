import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Warning_32x32_4 from '../../png/Warning_32x32_4.png';

export const warningData = {
  '32x32_4': {
    imageSrc: Warning_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface WarningProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Warning: React.FC<WarningProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = warningData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
