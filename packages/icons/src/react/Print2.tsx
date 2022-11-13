import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Print2_16x16_4 from '../../png/Print2_16x16_4.png';

export const print2Data = {
  '16x16_4': {
    imageSrc: Print2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Print2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Print2: React.FC<Print2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = print2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
