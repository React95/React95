import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FontWid_16x16_4 from '../../png/FontWid_16x16_4.png';

export const fontWidData = {
  '16x16_4': {
    imageSrc: FontWid_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FontWidProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const FontWid: React.FC<FontWidProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = fontWidData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
