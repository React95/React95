import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Comdlg32531_32x32_4 from '../../png/Comdlg32531_32x32_4.png';

export const comdlg32531Data = {
  '32x32_4': {
    imageSrc: Comdlg32531_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Comdlg32531Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Comdlg32531: React.FC<Comdlg32531Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = comdlg32531Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
