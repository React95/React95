import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderClosed_32x32_4 from '../../png/ReaderClosed_32x32_4.png';
import ReaderClosed_16x16_4 from '../../png/ReaderClosed_16x16_4.png';

export const readerClosedData = {
  '32x32_4': {
    imageSrc: ReaderClosed_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderClosed_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderClosedProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderClosed: React.FC<ReaderClosedProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerClosedData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
