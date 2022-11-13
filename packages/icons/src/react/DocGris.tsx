import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import DocGris_16x16_4 from '../../png/DocGris_16x16_4.png';

export const docGrisData = {
  '16x16_4': {
    imageSrc: DocGris_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface DocGrisProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const DocGris: React.FC<DocGrisProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = docGrisData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
