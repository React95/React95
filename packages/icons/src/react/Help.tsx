import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Help_16x16_4 from '../../png/Help_16x16_4.png';

export const helpData = {
  '16x16_4': {
    imageSrc: Help_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface HelpProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Help: React.FC<HelpProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = helpData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
