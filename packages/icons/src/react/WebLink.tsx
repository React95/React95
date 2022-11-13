import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import WebLink_16x16_4 from '../../png/WebLink_16x16_4.png';

export const webLinkData = {
  '16x16_4': {
    imageSrc: WebLink_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WebLinkProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const WebLink: React.FC<WebLinkProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = webLinkData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
