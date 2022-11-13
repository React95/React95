import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Drvspace7_32x32_4 from '../../png/Drvspace7_32x32_4.png';

export const drvspace7Data = {
  '32x32_4': {
    imageSrc: Drvspace7_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Drvspace7Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Drvspace7: React.FC<Drvspace7Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = drvspace7Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
