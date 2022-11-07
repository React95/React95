import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import OrderDs_16x16_4 from '../../png/OrderDs_16x16_4.png';

export const orderDsData = {
  '16x16_4': {
    imageSrc: OrderDs_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface OrderDsProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const OrderDs: React.FC<OrderDsProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = orderDsData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
