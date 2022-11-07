import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Internat151_16x16_4 from '../../png/Internat151_16x16_4.png';

export const internat151Data = {
  '16x16_4': {
    imageSrc: Internat151_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Internat151Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Internat151: React.FC<Internat151Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = internat151Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
