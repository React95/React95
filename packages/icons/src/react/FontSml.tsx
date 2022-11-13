import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FontSml_16x16_4 from '../../png/FontSml_16x16_4.png';

export const fontSmlData = {
  '16x16_4': {
    imageSrc: FontSml_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FontSmlProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const FontSml: React.FC<FontSmlProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = fontSmlData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
