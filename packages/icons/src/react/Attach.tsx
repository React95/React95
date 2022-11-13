import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Attach_16x16_4 from '../../png/Attach_16x16_4.png';

export const attachData = {
  '16x16_4': {
    imageSrc: Attach_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface AttachProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Attach: React.FC<AttachProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = attachData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
