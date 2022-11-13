import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FaxWarning_32x32_4 from '../../png/FaxWarning_32x32_4.png';
import FaxWarning_16x16_4 from '../../png/FaxWarning_16x16_4.png';

export const faxWarningData = {
  '32x32_4': {
    imageSrc: FaxWarning_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FaxWarning_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FaxWarningProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FaxWarning: React.FC<FaxWarningProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = faxWarningData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
