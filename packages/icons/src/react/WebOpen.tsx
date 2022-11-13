import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import WebOpen_16x16_4 from '../../png/WebOpen_16x16_4.png';

export const webOpenData = {
  '16x16_4': {
    imageSrc: WebOpen_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WebOpenProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const WebOpen: React.FC<WebOpenProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = webOpenData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
