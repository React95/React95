import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Justify_16x16_4 from '../../png/Justify_16x16_4.png';

export const justifyData = {
  '16x16_4': {
    imageSrc: Justify_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface JustifyProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Justify: React.FC<JustifyProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = justifyData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
