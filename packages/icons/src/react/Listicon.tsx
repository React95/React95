import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Listicon_16x16_4 from '../../png/Listicon_16x16_4.png';

export const listiconData = {
  '16x16_4': {
    imageSrc: Listicon_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ListiconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Listicon: React.FC<ListiconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = listiconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
