import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderDisket2_32x32_4 from '../../png/ReaderDisket2_32x32_4.png';
import ReaderDisket2_16x16_4 from '../../png/ReaderDisket2_16x16_4.png';

export const readerDisket2Data = {
  '32x32_4': {
    imageSrc: ReaderDisket2_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderDisket2_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderDisket2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderDisket2: React.FC<ReaderDisket2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerDisket2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
