import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderNoshared_32x32_4 from '../../png/ReaderNoshared_32x32_4.png';
import ReaderNoshared_16x16_4 from '../../png/ReaderNoshared_16x16_4.png';

export const readerNosharedData = {
  '32x32_4': {
    imageSrc: ReaderNoshared_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderNoshared_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderNosharedProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderNoshared: React.FC<ReaderNosharedProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerNosharedData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
