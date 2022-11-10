import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Comdlg32537_98x30_4 from '../../png/Comdlg32537_98x30_4.png';

export const comdlg32537Data = {
  '98x30_4': {
    imageSrc: Comdlg32537_98x30_4 as string,
    width: 98,
    height: 30,
  },
};

export interface Comdlg32537Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '98x30_4';
}

export const Comdlg32537: React.FC<Comdlg32537Props> = ({
  variant = '98x30_4',
  ...rest
}) => {
  const image = comdlg32537Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
