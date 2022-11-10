import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mapi32IconAttach_32x32_4 from '../../png/Mapi32IconAttach_32x32_4.png';

export const mapi32IconAttachData = {
  '32x32_4': {
    imageSrc: Mapi32IconAttach_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mapi32IconAttachProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mapi32IconAttach: React.FC<Mapi32IconAttachProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mapi32IconAttachData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
