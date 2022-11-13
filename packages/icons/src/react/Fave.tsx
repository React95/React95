import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fave_16x16_4 from '../../png/Fave_16x16_4.png';

export const faveData = {
  '16x16_4': {
    imageSrc: Fave_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FaveProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Fave: React.FC<FaveProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = faveData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
