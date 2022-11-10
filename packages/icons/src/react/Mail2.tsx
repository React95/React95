import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mail2_16x16_4 from '../../png/Mail2_16x16_4.png';

export const mail2Data = {
  '16x16_4': {
    imageSrc: Mail2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mail2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Mail2: React.FC<Mail2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = mail2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
