import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderOpened_32x32_4 from '../../png/ReaderOpened_32x32_4.png';
import ReaderOpened_16x16_4 from '../../png/ReaderOpened_16x16_4.png';

export const readerOpenedData = {
  '32x32_4': {
    imageSrc: ReaderOpened_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderOpened_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderOpenedProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderOpened: React.FC<ReaderOpenedProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerOpenedData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
