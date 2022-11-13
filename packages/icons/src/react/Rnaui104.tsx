import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rnaui104_32x32_4 from '../../png/Rnaui104_32x32_4.png';

export const rnaui104Data = {
  '32x32_4': {
    imageSrc: Rnaui104_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Rnaui104Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Rnaui104: React.FC<Rnaui104Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = rnaui104Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
