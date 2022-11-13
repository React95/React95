import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Twunk32TwunkIcon_32x32_4 from '../../png/Twunk32TwunkIcon_32x32_4.png';

export const twunk32TwunkIconData = {
  '32x32_4': {
    imageSrc: Twunk32TwunkIcon_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Twunk32TwunkIconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Twunk32TwunkIcon: React.FC<Twunk32TwunkIconProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = twunk32TwunkIconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
