import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Main200_32x32_1 from '../../png/Main200_32x32_1.png';
import Main200_32x32_4 from '../../png/Main200_32x32_4.png';

export const main200Data = {
  '32x32_1': {
    imageSrc: Main200_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Main200_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Main200Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Main200: React.FC<Main200Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = main200Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
