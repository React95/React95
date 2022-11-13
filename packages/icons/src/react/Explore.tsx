import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Explore_32x32_4 from '../../png/Explore_32x32_4.png';

export const exploreData = {
  '32x32_4': {
    imageSrc: Explore_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface ExploreProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Explore: React.FC<ExploreProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = exploreData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
