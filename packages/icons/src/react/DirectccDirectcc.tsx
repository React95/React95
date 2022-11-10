import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import DirectccDirectcc_32x32_4 from '../../png/DirectccDirectcc_32x32_4.png';
import DirectccDirectcc_16x16_4 from '../../png/DirectccDirectcc_16x16_4.png';

export const directccDirectccData = {
  '32x32_4': {
    imageSrc: DirectccDirectcc_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: DirectccDirectcc_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DirectccDirectccProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const DirectccDirectcc: React.FC<DirectccDirectccProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = directccDirectccData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
