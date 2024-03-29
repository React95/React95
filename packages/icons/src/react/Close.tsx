import React from 'react';
import type { SVGProps } from "react";

const Close_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="navy" d="M12 1h3m-3 1h2m-2 1h1m1 0h1m0 1h1m-1 1h1" /><path stroke="gray" d="M3 4h3M2 5h1M2 6h11M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M3 5h3M2 7h10" /><path stroke="#000" d="M6 5h1m6 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 14h13" /><path stroke="olive" d="M12 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 13h11" /><path stroke="silver" d="M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1M2 10h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M2 12h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#ff0" d="M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1M2 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1M2 11h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const closeData = {
  '16x16_4': Close_16x16_4
};

export interface CloseProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Close: React.FC<CloseProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = closeData[variant];

  return <Svg {...rest} />;
};
