import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Doc_16x16_4 from '../../png/Doc_16x16_4.png';

export const docData = {
  '16x16_4': {
    imageSrc: Doc_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DocProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Doc: React.FC<DocProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = docData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
