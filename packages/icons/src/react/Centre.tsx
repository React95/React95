import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Centre_16x16_4 from '../../png/Centre_16x16_4.png';

export const centreData = {
  '16x16_4': {
    imageSrc: Centre_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CentreProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Centre: React.FC<CentreProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = centreData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
