import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import InfoBubble_32x32_4 from '../../png/InfoBubble_32x32_4.png';

export const infoBubbleData = {
  '32x32_4': {
    imageSrc: InfoBubble_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface InfoBubbleProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const InfoBubble: React.FC<InfoBubbleProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = infoBubbleData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
