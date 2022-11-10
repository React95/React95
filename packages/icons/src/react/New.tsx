import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import New_16x16_4 from '../../png/New_16x16_4.png';

export const newData = {
  '16x16_4': {
    imageSrc: New_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface NewProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const New: React.FC<NewProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = newData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
