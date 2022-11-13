import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Pshbtn_16x16_4 from '../../png/Pshbtn_16x16_4.png';

export const pshbtnData = {
  '16x16_4': {
    imageSrc: Pshbtn_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PshbtnProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Pshbtn: React.FC<PshbtnProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = pshbtnData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
