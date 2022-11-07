import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import HelpPtr_16x16_4 from '../../png/HelpPtr_16x16_4.png';

export const helpPtrData = {
  '16x16_4': {
    imageSrc: HelpPtr_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface HelpPtrProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const HelpPtr: React.FC<HelpPtrProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = helpPtrData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
