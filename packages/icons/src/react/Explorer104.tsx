import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explorer104_16x16_4 from '../../png/Explorer104_16x16_4.png';

export const explorer104Data = {
  '16x16_4': {
    imageSrc: Explorer104_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Explorer104Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Explorer104: React.FC<Explorer104Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = explorer104Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
