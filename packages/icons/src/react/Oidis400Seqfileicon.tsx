import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Oidis400Seqfileicon_32x32_4 from '../../png/Oidis400Seqfileicon_32x32_4.png';

export const oidis400SeqfileiconData = {
  '32x32_4': {
    imageSrc: Oidis400Seqfileicon_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Oidis400SeqfileiconProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Oidis400Seqfileicon: React.FC<Oidis400SeqfileiconProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = oidis400SeqfileiconData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
