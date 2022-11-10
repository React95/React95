import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Open_16x16_4 from '../../png/Open_16x16_4.png';

export const openData = {
  '16x16_4': {
    imageSrc: Open_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface OpenProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Open: React.FC<OpenProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = openData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
