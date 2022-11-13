import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import CdSearch_32x32_4 from '../../png/CdSearch_32x32_4.png';

export const cdSearchData = {
  '32x32_4': {
    imageSrc: CdSearch_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface CdSearchProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const CdSearch: React.FC<CdSearchProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = cdSearchData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
