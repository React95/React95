import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mail_32x32_4 from '../../png/Mail_32x32_4.png';
import Mail_16x16_4 from '../../png/Mail_16x16_4.png';

export const mailData = {
  '32x32_4': {
    imageSrc: Mail_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mail_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MailProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mail: React.FC<MailProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mailData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
