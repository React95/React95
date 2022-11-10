import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Person116_16x16_4 from '../../png/Person116_16x16_4.png';

export const person116Data = {
  '16x16_4': {
    imageSrc: Person116_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Person116Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Person116: React.FC<Person116Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = person116Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
