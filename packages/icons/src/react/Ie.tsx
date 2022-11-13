import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Ie_16x16_8 from '../../png/Ie_16x16_8.png';

export const ieData = {
  '16x16_8': {
    imageSrc: Ie_16x16_8 as string,
    width: 16,
    height: 16,
  },
};

export interface IeProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_8';
}

export const Ie: React.FC<IeProps> = ({
  variant = '16x16_8',
  ...rest
}) => {
  const image = ieData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
