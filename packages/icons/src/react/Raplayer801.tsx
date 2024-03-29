import React from 'react';
import type { SVGProps } from "react";

const Raplayer801_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 5h10M8 6h3m10 0h3M6 7h2m16 0h2M4 8h2m20 0h2M3 9h1m10 0h2m12 0h1M2 10h1m10 0h1m1 0h1m13 0h1M1 11h1m10 0h1m2 0h1m14 0h1M1 12h1m9 0h1m3 0h1m14 0h1M0 13h1m7 0h3m4 0h2m14 0h1M0 14h1m7 0h1m6 0h1m1 0h1m13 0h1M0 15h1m7 0h1m6 0h1m1 0h1m13 0h1M0 16h1m7 0h1m6 0h1m1 0h1m13 0h1M0 17h1m7 0h4m3 0h2m14 0h1M1 18h1m9 0h1m3 0h1m14 0h1M1 19h1m10 0h1m2 0h1m14 0h1M2 20h1m10 0h1m1 0h1m13 0h1M3 21h1m10 0h2m12 0h1M4 22h2m21 0h1M6 23h2m17 0h2M8 24h3m12 0h2m-14 1h6m5 0h1m-7 1h1m4 0h1m-6 1h1m3 0h1m-5 1h1m2 0h1m-4 1h1m1 0h1m-3 1h2m-2 1h1" /><path stroke="#fff" d="M11 6h10M8 7h3m10 0h3M6 8h2m16 0h2M4 9h2m20 0h2M3 10h1m24 0h1M2 11h1m11 0h1M2 12h1m10 0h1M1 13h1m10 0h1M1 14h1m14 0h1M1 15h1m7 0h1m-9 1h1m-1 1h1" /><path stroke="silver" d="M11 7h10M8 8h16M6 9h8m2 0h10M4 10h9m1 0h1m1 0h12M3 11h9m1 0h1m2 0h5m1 0h8M3 12h8m1 0h1m3 0h2m1 0h3m1 0h7M2 13h6m3 0h1m5 0h2m1 0h2m1 0h7M2 14h6m1 0h1m8 0h2m1 0h2m1 0h6M2 15h6m8 0h1m1 0h2m1 0h2m1 0h6M2 16h6m10 0h2m1 0h2m1 0h6M2 17h6m9 0h2m1 0h3m1 0h6M2 18h9m5 0h2m1 0h3m1 0h6M2 19h10m4 0h6m1 0h6M4 20h9m3 0h5m1 0h6M6 21h8m2 0h10M8 22h16m-13 1h12m-6 1h5m-4 1h3m-3 1h2m-2 1h1" /><path stroke="green" d="M21 11h1m-4 1h1m3 0h1m-4 1h1m2 0h1m-3 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-5 1h1m3 0h1m-6 1h1m3 0h1m-1 1h1m-2 1h1" /><path stroke="gray" d="M0 12h1m30 0h1m-2 1h1m-1 1h1m-1 1h1M9 16h2m5 0h1m13 0h1m-1 1h1M0 18h1m11 0h1m16 0h1m1 0h1m-19 1h1m15 0h1M3 20h1m10 0h1m13 0h1M4 21h2m20 0h2M6 22h2m16 0h3M8 23h3m12 0h2m-14 1h6m5 0h1m-6 1h1m3 0h1m-5 1h1m2 0h1m-4 1h1m1 0h1m-3 1h2m-2 1h1" /><path stroke="#ff0" d="M14 12h1m-2 1h2m-5 1h5m-5 1h5m-3 1h3m-1 1h1" /><path stroke="olive" d="M11 16h1m0 1h2m-1 1h2m-1 1h1" /></svg>;

export const raplayer801Data = {
  '32x32_4': Raplayer801_32x32_4
};

export interface Raplayer801Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Raplayer801: React.FC<Raplayer801Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = raplayer801Data[variant];

  return <Svg {...rest} />;
};
