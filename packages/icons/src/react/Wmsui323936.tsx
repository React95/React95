import React from 'react';
import type { SVGProps } from "react";

const Wmsui323936_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 1h4M4 2h1m4 0h4M3 3h4M2 4h1m4 0h4M2 5h1M2 6h1M2 7h1M1 8h2m11 0h1M0 9h12m1 0h2M0 10h1m11 0h3M0 11h1m11 0h3M0 12h1m11 0h3M0 13h1m11 0h2M0 14h1m11 0h1" /><path stroke="#ff0" d="M5 2h1m1 0h1m0 1h1m1 0h1m1 0h1M3 4h1m1 0h1m7 0h1M5 6h1m1 0h1m1 0h1m1 0h1m1 0h1M4 7h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m1 0h1" /><path stroke="silver" d="M6 2h1m1 0h1M7 3h1m1 0h1m1 0h1m1 0h1M4 4h1m1 0h1m6 1h1M4 6h1m1 0h1m1 0h1m1 0h1M5 7h1m1 0h1m1 0h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1m-9 3h1m7 0h1m-8 1h1m5 0h1m1 0h1M2 13h1m1 0h1m3 0h1m1 0h1m-9 1h10" /><path stroke="#000" d="M13 2h1m0 1h1m-4 1h2m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h2m-4 1h2m1 0h1m-4 1h1m2 0h1m-1 1h1M4 11h5m6 0h1M5 12h3m7 0h1M6 13h1m7 0h1m-2 1h1M0 15h13" /><path stroke="#fff" d="M3 5h9M3 6h1M3 7h1M3 8h1m-3 2h11M1 11h1m1 0h1m5 0h1m1 0h1M1 12h2m1 0h1m3 0h1m1 0h1M1 13h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 14h1" /></svg>;

export const wmsui323936Data = {
  '16x16_4': Wmsui323936_16x16_4
};

export interface Wmsui323936Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Wmsui323936: React.FC<Wmsui323936Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = wmsui323936Data[variant];

  return <Svg {...rest} />;
};
