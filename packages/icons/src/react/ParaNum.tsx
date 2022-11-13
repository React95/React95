import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ParaNum_16x16_4 from '../../png/ParaNum_16x16_4.png';

export const paraNumData = {
  '16x16_4': {
    imageSrc: ParaNum_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ParaNumProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const ParaNum: React.FC<ParaNumProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = paraNumData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
