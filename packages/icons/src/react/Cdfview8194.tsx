import React from 'react';
import type { SVGProps } from "react";

const Cdfview8194_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#00f" d="M2 0h1m0 1h1m0 1h1m4 0h3M4 3h1m2 0h2m2 0h2M5 4h2m4 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-4 1h1m-1 1h1" /><path stroke="#000" d="M1 1h1M1 2h1M1 3h1M1 4h1m11 0h1M1 5h1m3 0h1m7 0h1M1 6h1m3 0h1m7 0h1M1 7h1m3 0h1m7 0h1M1 8h1m3 0h1m7 0h1M1 9h1m3 0h1m7 0h1M1 10h1m3 0h1m7 0h1M0 11h1m4 0h1m3 0h3m1 0h1M1 12h1m3 0h3m5 0h1M2 13h1m1 0h10M2 14h4" /><path stroke="silver" d="M2 1h1M2 2h2M2 3h2M2 4h3m7 0h1M2 5h3m1 0h1m5 0h1M2 6h3m1 0h1m5 0h1M2 7h3m1 0h1m5 0h1M2 8h3m1 0h1m5 0h1M2 9h3m1 0h1m5 0h1M2 10h3m1 0h1m5 0h1M3 11h2m1 0h1m5 0h1m-9 1h1m4 0h4" /><path stroke="navy" d="M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m0 1h2m-1 1h2m-1 1h1" /><path stroke="#fff" d="M9 3h2M7 4h4M7 5h4M7 6h4M7 7h4M7 8h4M7 9h4m-4 1h4m-4 1h1" /></svg>;

export const cdfview8194Data = {
  '16x16_4': Cdfview8194_16x16_4
};

export interface Cdfview8194Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Cdfview8194Component = ({
  variant = '16x16_4',
  ...rest
}: Cdfview8194Props) => {
  const Svg = cdfview8194Data[variant];

  return <Svg {...rest} />;
};

export const Cdfview8194 = React.memo(Cdfview8194Component);
Cdfview8194.displayName = 'Cdfview8194';
