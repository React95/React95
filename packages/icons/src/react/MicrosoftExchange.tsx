import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import MicrosoftExchange_32x32_4 from '../../png/MicrosoftExchange_32x32_4.png';
import MicrosoftExchange_16x16_4 from '../../png/MicrosoftExchange_16x16_4.png';

export const microsoftExchangeData = {
  '32x32_4': {
    imageSrc: MicrosoftExchange_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: MicrosoftExchange_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MicrosoftExchangeProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const MicrosoftExchange: React.FC<MicrosoftExchangeProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = microsoftExchangeData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
