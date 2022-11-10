import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Undo_16x16_4 from '../../png/Undo_16x16_4.png';

export const undoData = {
  '16x16_4': {
    imageSrc: Undo_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface UndoProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Undo: React.FC<UndoProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = undoData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
