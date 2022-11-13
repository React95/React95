import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Redo_16x16_4 from '../../png/Redo_16x16_4.png';

export const redoData = {
  '16x16_4': {
    imageSrc: Redo_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface RedoProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Redo: React.FC<RedoProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = redoData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
