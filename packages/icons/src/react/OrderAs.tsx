import React from 'react';
import type { SVGProps } from "react";

const OrderAs_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="navy" d="M5 1h1M5 2h1M4 3h3M4 4h1m1 0h1M3 5h5M3 6h1m3 0h1M2 7h3m1 0h3" /><path stroke="#000" d="M13 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-3 1h5m-4 1h3m-3 1h3m-2 1h1m-1 1h1" /><path stroke="gray" d="M4 2h1m1 0h1M3 4h1m3 0h1M2 6h1m5 0h1m2 6h1m3 0h1m-4 2h1m1 0h1" /><path stroke="maroon" d="M2 9h6m-6 1h1m3 0h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2m3 0h1m-6 1h6" /></svg>;

export const orderAsData = {
  '16x16_4': OrderAs_16x16_4
};

export interface OrderAsProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const OrderAs: React.FC<OrderAsProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = orderAsData[variant];

  return <Svg {...rest} />;
};
