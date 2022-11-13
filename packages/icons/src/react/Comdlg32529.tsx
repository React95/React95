import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Comdlg32529_32x32_4 from '../../png/Comdlg32529_32x32_4.png';

export const comdlg32529Data = {
  '32x32_4': {
    imageSrc: Comdlg32529_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Comdlg32529Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Comdlg32529: React.FC<Comdlg32529Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = comdlg32529Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
