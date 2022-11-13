import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import BillAdd_32x32_4 from '../../png/BillAdd_32x32_4.png';

export const billAddData = {
  '32x32_4': {
    imageSrc: BillAdd_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface BillAddProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const BillAdd: React.FC<BillAddProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = billAddData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
