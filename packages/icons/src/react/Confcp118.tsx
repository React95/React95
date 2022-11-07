import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Confcp118_32x32_4 from '../../png/Confcp118_32x32_4.png';

export const confcp118Data = {
  '32x32_4': {
    imageSrc: Confcp118_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Confcp118Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Confcp118: React.FC<Confcp118Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = confcp118Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
