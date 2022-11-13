import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explorer105_32x32_4 from '../../png/Explorer105_32x32_4.png';

export const explorer105Data = {
  '32x32_4': {
    imageSrc: Explorer105_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Explorer105Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Explorer105: React.FC<Explorer105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = explorer105Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
