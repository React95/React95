import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mail3_16x16_4 from '../../png/Mail3_16x16_4.png';

export const mail3Data = {
  '16x16_4': {
    imageSrc: Mail3_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mail3Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Mail3: React.FC<Mail3Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = mail3Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
