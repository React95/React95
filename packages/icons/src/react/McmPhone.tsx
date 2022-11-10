import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import McmPhone_32x32_4 from '../../png/McmPhone_32x32_4.png';

export const mcmPhoneData = {
  '32x32_4': {
    imageSrc: McmPhone_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface McmPhoneProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const McmPhone: React.FC<McmPhoneProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mcmPhoneData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
