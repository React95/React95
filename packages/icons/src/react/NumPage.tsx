import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import NumPage_16x16_4 from '../../png/NumPage_16x16_4.png';

export const numPageData = {
  '16x16_4': {
    imageSrc: NumPage_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface NumPageProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const NumPage: React.FC<NumPageProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = numPageData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
