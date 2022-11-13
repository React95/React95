import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Rsrcmtr122_16x16_4 from '../../png/Rsrcmtr122_16x16_4.png';

export const rsrcmtr122Data = {
  '16x16_4': {
    imageSrc: Rsrcmtr122_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Rsrcmtr122Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Rsrcmtr122: React.FC<Rsrcmtr122Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = rsrcmtr122Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
