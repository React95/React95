import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Binoc_16x16_4 from '../../png/Binoc_16x16_4.png';

export const binocData = {
  '16x16_4': {
    imageSrc: Binoc_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BinocProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Binoc: React.FC<BinocProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = binocData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
