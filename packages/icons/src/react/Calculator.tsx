import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Calculator_32x32_4 from '../../png/Calculator_32x32_4.png';
import Calculator_16x16_4 from '../../png/Calculator_16x16_4.png';

export const calculatorData = {
  '32x32_4': {
    imageSrc: Calculator_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Calculator_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CalculatorProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Calculator: React.FC<CalculatorProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = calculatorData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
