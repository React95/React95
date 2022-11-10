import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Comdlg32536_91x36_4 from '../../png/Comdlg32536_91x36_4.png';

export const comdlg32536Data = {
  '91x36_4': {
    imageSrc: Comdlg32536_91x36_4 as string,
    width: 91,
    height: 36,
  },
};

export interface Comdlg32536Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '91x36_4';
}

export const Comdlg32536: React.FC<Comdlg32536Props> = ({
  variant = '91x36_4',
  ...rest
}) => {
  const image = comdlg32536Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
