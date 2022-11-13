import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaapp111_16x16_4 from '../../png/Rnaapp111_16x16_4.png';

export const rnaapp111Data = {
  '16x16_4': {
    imageSrc: Rnaapp111_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rnaapp111Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rnaapp111: React.FC<Rnaapp111Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rnaapp111Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
