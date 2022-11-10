import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fax_32x32_4 from '../../png/Fax_32x32_4.png';
import Fax_16x16_4 from '../../png/Fax_16x16_4.png';

export const faxData = {
  '32x32_4': {
    imageSrc: Fax_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Fax_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FaxProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Fax: React.FC<FaxProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = faxData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
