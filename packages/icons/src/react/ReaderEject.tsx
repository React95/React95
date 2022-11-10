import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderEject_32x32_4 from '../../png/ReaderEject_32x32_4.png';
import ReaderEject_16x16_4 from '../../png/ReaderEject_16x16_4.png';

export const readerEjectData = {
  '32x32_4': {
    imageSrc: ReaderEject_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: ReaderEject_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface ReaderEjectProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const ReaderEject: React.FC<ReaderEjectProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerEjectData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
