import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Font2_16x16_4 from '../../png/Font2_16x16_4.png';

export const font2Data = {
  '16x16_4': {
    imageSrc: Font2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Font2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Font2: React.FC<Font2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = font2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
