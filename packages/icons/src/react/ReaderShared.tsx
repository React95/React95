import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderShared_32x32_4 from '../../png/ReaderShared_32x32_4.png';
import ReaderShared_16x16_4 from '../../png/ReaderShared_16x16_4.png';

export const readerSharedData = {
  '32x32_4': {
    imageSrc: ReaderShared_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderShared_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderSharedProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderShared: React.FC<ReaderSharedProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerSharedData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
