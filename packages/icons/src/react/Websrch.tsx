import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Websrch_16x16_4 from '../../png/Websrch_16x16_4.png';

export const websrchData = {
  '16x16_4': {
    imageSrc: Websrch_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WebsrchProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Websrch: React.FC<WebsrchProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = websrchData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
