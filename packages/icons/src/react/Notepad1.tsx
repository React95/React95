import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Notepad1_16x16_4 from '../../png/Notepad1_16x16_4.png';
import Notepad1_32x32_4 from '../../png/Notepad1_32x32_4.png';

export const notepad1Data = {
  '16x16_4': {
    imageSrc: Notepad1_16x16_4 as string,
    width: 16,
    height: 16,
  },

  '32x32_4': {
    imageSrc: Notepad1_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Notepad1Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4' | '32x32_4';
}

export const Notepad1: React.FC<Notepad1Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = notepad1Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
