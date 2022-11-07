import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Notepad_16x16_4 from '../../png/Notepad_16x16_4.png';
import Notepad_32x32_4 from '../../png/Notepad_32x32_4.png';

export const notepadData = {
  '16x16_4': {
    imageSrc: Notepad_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Notepad_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface NotepadProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4' | '32x32_4';
}

export const Notepad: React.FC<NotepadProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = notepadData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
