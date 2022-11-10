import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ProdinvMyicon_32x32_1 from '../../png/ProdinvMyicon_32x32_1.png';
import ProdinvMyicon_32x32_4 from '../../png/ProdinvMyicon_32x32_4.png';

export const prodinvMyiconData = {
  '32x32_1': {
    imageSrc: ProdinvMyicon_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: ProdinvMyicon_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface ProdinvMyiconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const ProdinvMyicon: React.FC<ProdinvMyiconProps> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = prodinvMyiconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
