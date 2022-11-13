import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Defrag_32x32_4 from '../../png/Defrag_32x32_4.png';
import Defrag_16x16_4 from '../../png/Defrag_16x16_4.png';

export const defragData = {
  '32x32_4': {
    imageSrc: Defrag_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Defrag_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DefragProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag: React.FC<DefragProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = defragData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
