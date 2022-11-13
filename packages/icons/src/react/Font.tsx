import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Font_32x32_4 from '../../png/Font_32x32_4.png';

export const fontData = {
  '32x32_4': {
    imageSrc: Font_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface FontProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Font: React.FC<FontProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = fontData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
