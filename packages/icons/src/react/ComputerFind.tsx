import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ComputerFind_32x32_4 from '../../png/ComputerFind_32x32_4.png';
import ComputerFind_16x16_4 from '../../png/ComputerFind_16x16_4.png';

export const computerFindData = {
  '32x32_4': {
    imageSrc: ComputerFind_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ComputerFind_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ComputerFindProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ComputerFind: React.FC<ComputerFindProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = computerFindData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
