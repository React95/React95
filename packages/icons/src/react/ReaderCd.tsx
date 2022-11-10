import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderCd_32x32_4 from '../../png/ReaderCd_32x32_4.png';
import ReaderCd_16x16_4 from '../../png/ReaderCd_16x16_4.png';

export const readerCdData = {
  '32x32_4': {
    imageSrc: ReaderCd_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderCd_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderCdProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderCd: React.FC<ReaderCdProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerCdData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
