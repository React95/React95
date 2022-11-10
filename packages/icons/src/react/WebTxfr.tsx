import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import WebTxfr_16x16_4 from '../../png/WebTxfr_16x16_4.png';

export const webTxfrData = {
  '16x16_4': {
    imageSrc: WebTxfr_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WebTxfrProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const WebTxfr: React.FC<WebTxfrProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = webTxfrData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
