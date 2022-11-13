import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import ReaderCd2_32x32_4 from '../../png/ReaderCd2_32x32_4.png';

export const readerCd2Data = {
  '32x32_4': {
    imageSrc: ReaderCd2_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface ReaderCd2Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const ReaderCd2: React.FC<ReaderCd2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = readerCd2Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
