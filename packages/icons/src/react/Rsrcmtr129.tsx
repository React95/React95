import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr129_16x16_4 from '../../png/Rsrcmtr129_16x16_4.png';

export const rsrcmtr129Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr129_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr129Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr129: React.FC<Rsrcmtr129Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr129Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
