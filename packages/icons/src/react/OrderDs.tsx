import React from 'react';
import type { SVGProps } from "react";

const OrderDs_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="maroon" d="M2 1h6M2 2h1m3 0h2M5 3h2M4 4h2M3 5h2M2 6h2m3 0h1M2 7h6" /><path stroke="#000" d="M13 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-3 1h5m-4 1h3m-3 1h3m-2 1h1m-1 1h1" /><path stroke="navy" d="M5 9h1m-1 1h1m-2 1h3m-3 1h1m1 0h1m-4 1h5m-5 1h1m3 0h1m-6 1h3m1 0h3" /><path stroke="gray" d="M4 10h1m1 0h1m-4 2h1m3 0h1m3 0h1m3 0h1M2 14h1m5 0h1m3 0h1m1 0h1" /></svg>;

export const orderDsData = {
  '16x16_4': OrderDs_16x16_4
};

export interface OrderDsProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const OrderDs: React.FC<OrderDsProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = orderDsData[variant];

  return <Svg {...rest} />;
};
