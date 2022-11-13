import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Close_16x16_4 from '../../png/Close_16x16_4.png';

export const closeData = {
  '16x16_4': {
    imageSrc: Close_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CloseProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Close: React.FC<CloseProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = closeData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
