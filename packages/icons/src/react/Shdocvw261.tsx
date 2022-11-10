import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shdocvw261_16x16_4 from '../../png/Shdocvw261_16x16_4.png';

export const shdocvw261Data = {
  '16x16_4': {
    imageSrc: Shdocvw261_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shdocvw261Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Shdocvw261: React.FC<Shdocvw261Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = shdocvw261Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
