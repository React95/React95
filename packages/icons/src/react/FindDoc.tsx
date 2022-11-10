import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FindDoc_16x16_4 from '../../png/FindDoc_16x16_4.png';

export const findDocData = {
  '16x16_4': {
    imageSrc: FindDoc_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FindDocProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const FindDoc: React.FC<FindDocProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = findDocData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
