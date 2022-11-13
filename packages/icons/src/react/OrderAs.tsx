import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import OrderAs_16x16_4 from '../../png/OrderAs_16x16_4.png';

export const orderAsData = {
  '16x16_4': {
    imageSrc: OrderAs_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface OrderAsProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const OrderAs: React.FC<OrderAsProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = orderAsData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
