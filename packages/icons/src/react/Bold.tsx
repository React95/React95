import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Bold_16x16_4 from '../../png/Bold_16x16_4.png';

export const boldData = {
  '16x16_4': {
    imageSrc: Bold_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BoldProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Bold: React.FC<BoldProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = boldData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
