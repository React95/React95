import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Faxcover140_32x32_4 from '../../png/Faxcover140_32x32_4.png';

export const faxcover140Data = {
  '32x32_4': {
    imageSrc: Faxcover140_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Faxcover140Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Faxcover140: React.FC<Faxcover140Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = faxcover140Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
