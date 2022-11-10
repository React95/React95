import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Addrbook_16x16_4 from '../../png/Addrbook_16x16_4.png';

export const addrbookData = {
  '16x16_4': {
    imageSrc: Addrbook_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface AddrbookProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Addrbook: React.FC<AddrbookProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = addrbookData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
