import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Detlicon_16x16_4 from '../../png/Detlicon_16x16_4.png';

export const detliconData = {
  '16x16_4': {
    imageSrc: Detlicon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DetliconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Detlicon: React.FC<DetliconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = detliconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
