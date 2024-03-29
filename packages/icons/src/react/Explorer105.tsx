import React from 'react';
import type { SVGProps } from "react";

const Explorer105_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M17 0h7m-7 1h1m-1 1h1m-1 1h1m-1 1h1m3 1h6m-6 1h6m-6 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h2m-6 1h1m3 0h3m-7 1h1m3 0h4m-8 1h1m3 0h5m-9 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h2m2 0h6m-8 1h1m1 0h6m-7 1h7" /><path stroke="#fff" d="M18 1h1m-1 1h2m-2 1h1m1 0h1m-3 1h1m2 0h6m-9 1h1M4 6h2m12 0h1M3 7h1M2 8h1m1 0h4M1 9h1m1 0h1m-2 1h1m20 1h1m-1 1h2m-1 1h1m1 0h1m-1 1h1m-2 1h1m-8 1h1m7 0h1m-9 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M19 1h5m-4 1h5m-6 1h1m1 0h5m-7 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-3 1h3m-2 1h2m-1 1h1" /><path stroke="#000" d="M24 1h1m0 1h1m0 1h1m0 1h1m-1 1h1m-1 1h1M18 7h1m7 0h2M18 8h1m8 0h1M18 9h1m9 0h1m-11 1h1m10 0h1M0 11h1m17 0h1m11 0h1M1 12h1m16 0h1m12 0h1M2 13h1m15 0h1m12 0h1M3 14h1m14 0h1m12 0h1M4 15h15m3 0h1m8 0h1m-9 1h1m7 0h1m-8 1h1m6 0h1m-7 1h1m5 0h1m-6 1h6m-5 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-10 1h1m8 0h1m-9 1h1m7 0h1m-8 1h8" /><path stroke="olive" d="M4 5h14M3 6h1m13 0h1M2 7h1m1 0h14M1 8h1m1 0h1m13 0h1M0 9h1m1 0h1m4 0h1m4 0h1m4 0h1M0 10h2m3 0h2m2 0h2m1 0h1m1 0h1m2 0h1M1 11h1m3 0h1m2 0h1m2 0h1m1 0h1m1 0h1m1 0h1M2 12h1m4 0h1m2 0h1m1 0h1m1 0h1m2 0h1M3 13h1m13 0h1M4 14h14" /><path stroke="#ff0" d="M6 6h11M8 8h9M4 9h3m1 0h4m1 0h4M3 10h2m2 0h2m2 0h1m1 0h1m1 0h2M2 11h3m1 0h2m1 0h2m1 0h1m1 0h1m1 0h1M3 12h4m1 0h2m1 0h1m1 0h1m1 0h2M4 13h13" /><path stroke="green" d="M22 7h4m-4 1h2m2 0h1m-5 1h3m2 0h1m-6 1h4m2 0h1m-7 1h1m1 0h3m2 0h1m-8 1h1m2 0h3m2 0h1m-9 1h2m1 0h1m1 0h2m1 0h1m-9 1h4m1 0h2m1 0h1m-8 1h2m1 0h3m1 0h1m-7 1h2m1 0h2m1 0h1m-6 1h4m1 0h1m-5 1h3m1 0h1" /><path stroke="#0f0" d="M24 8h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;

export const explorer105Data = {
  '32x32_4': Explorer105_32x32_4
};

export interface Explorer105Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Explorer105: React.FC<Explorer105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = explorer105Data[variant];

  return <Svg {...rest} />;
};
