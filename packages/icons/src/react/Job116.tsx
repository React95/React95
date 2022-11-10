import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Job116_16x16_4 from '../../png/Job116_16x16_4.png';

export const job116Data = {
  '16x16_4': {
    imageSrc: Job116_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Job116Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Job116: React.FC<Job116Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = job116Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
