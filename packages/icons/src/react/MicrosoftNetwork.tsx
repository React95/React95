import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import MicrosoftNetwork_32x32_4 from '../../png/MicrosoftNetwork_32x32_4.png';
import MicrosoftNetwork_16x16_4 from '../../png/MicrosoftNetwork_16x16_4.png';

export const microsoftNetworkData = {
  '32x32_4': {
    imageSrc: MicrosoftNetwork_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: MicrosoftNetwork_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MicrosoftNetworkProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const MicrosoftNetwork: React.FC<MicrosoftNetworkProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = microsoftNetworkData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
