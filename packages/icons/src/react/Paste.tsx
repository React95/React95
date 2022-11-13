import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Paste_16x16_4 from '../../png/Paste_16x16_4.png';

export const pasteData = {
  '16x16_4': {
    imageSrc: Paste_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PasteProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Paste: React.FC<PasteProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = pasteData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
