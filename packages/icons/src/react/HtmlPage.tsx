import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import HtmlPage_16x16_8 from '../../png/HtmlPage_16x16_8.png';

export const htmlPageData = {
  '16x16_8': {
    imageSrc: HtmlPage_16x16_8 as string,
    width: 16,
    height: 16,
  },
};

export interface HtmlPageProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_8';
}

export const HtmlPage: React.FC<HtmlPageProps> = ({
  variant = '16x16_8',
  ...rest
}) => {
  const image = htmlPageData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
