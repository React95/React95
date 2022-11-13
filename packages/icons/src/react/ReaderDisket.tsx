import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderDisket_32x32_4 from '../../png/ReaderDisket_32x32_4.png';
import ReaderDisket_16x16_4 from '../../png/ReaderDisket_16x16_4.png';

export const readerDisketData = {
  '32x32_4': {
    imageSrc: ReaderDisket_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderDisket_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderDisketProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderDisket: React.FC<ReaderDisketProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerDisketData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
