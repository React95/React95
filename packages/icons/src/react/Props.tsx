import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Props_16x16_4 from '../../png/Props_16x16_4.png';

export const propsData = {
  '16x16_4': {
    imageSrc: Props_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface PropsProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Props: React.FC<PropsProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = propsData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
