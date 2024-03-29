import React from 'react';
import type { SVGProps } from "react";

const Mshtml32545_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 0h5M3 1h2M2 2h1M1 3h1m4 0h7M1 4h1m11 0h1M0 5h1m13 0h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1" /><path stroke="silver" d="M5 1h1M4 2h1M3 3h1M2 4h1m3 0h1m5 0h1M1 5h1m1 0h1m2 0h1m5 0h1M6 6h1M1 7h1m1 0h1m1 0h2m5 0h1m1 0h1M2 8h1m1 0h1m1 0h1m3 0h1m3 0h1M2 9h1m3 0h1m2 0h1m4 0h1M5 10h2m7 0h1m-9 1h1m5 0h1m1 0h1m-9 1h1m7 0h1m-9 1h1m7 0h1m-9 1h9" /><path stroke="#fff" d="M6 1h1M3 2h1m1 0h1M2 3h1m0 1h1m3 0h3m1 0h1M2 5h1m1 0h1m2 0h1m1 0h3m1 0h1M1 6h3m3 0h3m1 0h1M2 7h1m1 0h1m2 0h1m5 0h1M3 8h1m3 0h1m1 0h1m3 0h1M7 9h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h3m1 0h3m-7 1h1m1 0h3m1 0h1" /><path stroke="#00f" d="M7 1h1m2 0h2M6 2h1m1 0h1m2 0h1M5 5h1M4 6h1M3 9h1m7 0h1M2 10h3m4 0h3M1 11h1m1 0h3m-4 1h4m-3 1h2" /><path stroke="teal" d="M8 1h2M4 3h1m4 4h3M1 8h1m6 0h1M1 9h1m2 0h2m2 0h1m-1 1h1" /><path stroke="green" d="M7 2h1m1 0h2M5 3h1M4 4h2M5 6h1M5 8h1m5 0h1m-2 1h1M1 10h1m0 1h1" /><path stroke="navy" d="M12 2h1m-1 6h1m-1 1h1m-1 1h1m-4 1h3M1 12h1m0 1h1m2 0h1m-3 1h3" /><path stroke="#000" d="M13 3h1m-2 3h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M5 15h11" /><path stroke="#ff0" d="M10 4h1M8 5h1m1 1h1M8 7h1m-1 4h1m1 1h1m-3 1h1m3 0h1" /></svg>;

export const mshtml32545Data = {
  '16x16_4': Mshtml32545_16x16_4
};

export interface Mshtml32545Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Mshtml32545: React.FC<Mshtml32545Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = mshtml32545Data[variant];

  return <Svg {...rest} />;
};
