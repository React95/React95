import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Underlne_16x16_4 from '../../png/Underlne_16x16_4.png';

export const underlneData = {
  '16x16_4': {
    imageSrc: Underlne_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface UnderlneProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Underlne: React.FC<UnderlneProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = underlneData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
