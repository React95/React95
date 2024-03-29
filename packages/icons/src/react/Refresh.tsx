import React from 'react';
import type { SVGProps } from "react";

const Refresh_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M2 0h10M2 1h1m8 0h2M2 2h1m8 0h1m1 0h1M2 3h1m8 0h4M2 4h1m11 0h1M2 5h1m11 0h1M2 6h1m11 0h1M2 7h1m11 0h1M2 8h1m11 0h1M2 9h1m11 0h1M2 10h1m11 0h1M2 11h1m11 0h1M2 12h1m11 0h1M2 13h1m11 0h1M2 14h1m11 0h1M2 15h13" /><path stroke="#fff" d="M3 1h8M3 2h8m1 0h1M3 3h5m1 0h2M3 4h5m2 0h4M3 5h3m5 0h3M3 6h2m1 0h2m2 0h4M3 7h2m1 0h2m1 0h5M3 8h2m1 0h5m1 0h2M3 9h5m1 0h2m1 0h2M3 10h4m2 0h2m1 0h2M3 11h3m5 0h3M3 12h4m2 0h5M3 13h5m1 0h5M3 14h11" /><path stroke="green" d="M8 3h1M8 4h2M6 5h5M5 6h1m2 0h2M5 7h1m2 0h1M5 8h1m5 0h1M8 9h1m2 0h1m-5 1h2m2 0h1m-6 1h5m-4 1h2m-1 1h1" /></svg>;

export const refreshData = {
  '16x16_4': Refresh_16x16_4
};

export interface RefreshProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Refresh: React.FC<RefreshProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = refreshData[variant];

  return <Svg {...rest} />;
};
