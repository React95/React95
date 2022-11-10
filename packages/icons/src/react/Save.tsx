import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Save_16x16_4 from '../../png/Save_16x16_4.png';

export const saveData = {
  '16x16_4': {
    imageSrc: Save_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface SaveProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Save: React.FC<SaveProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = saveData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
