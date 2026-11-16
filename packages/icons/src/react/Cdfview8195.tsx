import React from 'react';
import type { SVGProps } from "react";

const Cdfview8195_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 0h2M5 1h2m2 0h1M3 2h2m5 0h1M1 3h2m8 0h1M0 4h1m11 0h1M0 5h1m12 0h1M0 6h1m13 0h1M0 7h1m13 0h2M0 8h1m11 0h2M1 9h1m8 0h2M2 10h1m5 0h2m4 0h2M3 11h1m3 0h1m5 0h2M4 12h1m2 0h1m3 0h2m-8 1h1m1 0h1m1 0h2m-5 1h3" /><path stroke="#00f" d="M7 1h2M5 2h5M3 3h8M3 4h9M1 5h1m2 0h9M1 6h2m2 0h9M1 7h3m2 0h8M1 8h4m2 0h5M2 9h4m2 0h2m-7 1h4m-3 1h3m-2 1h2m-1 1h1" /><path stroke="teal" d="M1 4h1m0 1h1m0 1h1m0 1h1m0 1h1m8 0h1M6 9h1m5 0h1m1 0h1m-8 1h1m2 0h1m-3 1h1m-1 2h1" /><path stroke="silver" d="M2 4h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m5 0h1m-3 1h3m-5 1h4m-5 1h3" /><path stroke="gray" d="M15 8h1m-1 1h1" /></svg>;

export const cdfview8195Data = {
  '16x16_4': Cdfview8195_16x16_4
};

export interface Cdfview8195Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Cdfview8195Component = ({
  variant = '16x16_4',
  ...rest
}: Cdfview8195Props) => {
  const Svg = cdfview8195Data[variant];

  return <Svg {...rest} />;
};

export const Cdfview8195 = React.memo(Cdfview8195Component);
Cdfview8195.displayName = 'Cdfview8195';
