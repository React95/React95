import React from 'react';
import type { SVGProps } from "react";

const Mshtml32544_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 1h5M2 2h1m5 0h1M1 3h1m7 0h6M1 4h1m12 0h1M1 5h1m12 0h1M1 6h1m12 0h1M1 7h1m12 0h1M1 8h1m12 0h1M1 9h1m12 0h1M1 10h1m12 0h1M1 11h1m12 0h1M1 12h14" /><path stroke="silver" d="M3 2h1m1 0h1m1 0h1M2 3h1m1 0h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 7h1m1 0h1m1 0h1m1 0h1m1 0h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m1 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#ff0" d="M4 2h1m1 0h1M3 3h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 6h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M2 4h12M2 5h1M2 6h1M2 7h1M2 8h1M2 9h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M15 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 13h14" /></svg>;

export const mshtml32544Data = {
  '16x16_4': Mshtml32544_16x16_4
};

export interface Mshtml32544Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Mshtml32544: React.FC<Mshtml32544Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = mshtml32544Data[variant];

  return <Svg {...rest} />;
};
