import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explorer108_32x32_4 from '../../png/Explorer108_32x32_4.png';

export const explorer108Data = {
  '32x32_4': {
    imageSrc: Explorer108_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Explorer108Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Explorer108: React.FC<Explorer108Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = explorer108Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
