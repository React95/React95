import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shdocvw275_16x16_4 from '../../png/Shdocvw275_16x16_4.png';

export const shdocvw275Data = {
  '16x16_4': {
    imageSrc: Shdocvw275_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shdocvw275Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Shdocvw275: React.FC<Shdocvw275Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = shdocvw275Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
