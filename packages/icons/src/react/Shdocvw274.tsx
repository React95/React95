import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Shdocvw274_16x16_4 from '../../png/Shdocvw274_16x16_4.png';

export const shdocvw274Data = {
  '16x16_4': {
    imageSrc: Shdocvw274_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Shdocvw274Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Shdocvw274: React.FC<Shdocvw274Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = shdocvw274Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
