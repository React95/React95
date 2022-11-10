import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Right_16x16_4 from '../../png/Right_16x16_4.png';

export const rightData = {
  '16x16_4': {
    imageSrc: Right_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface RightProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Right: React.FC<RightProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rightData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
