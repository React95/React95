import React from 'react';
import type { SVGProps } from "react";

const Fm20enu5_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h1M0 2h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1m20 0h7M0 9h1m17 0h1m2 0h1M0 10h1m5 0h11m1 0h1m2 0h1M0 11h1m5 0h1m8 0h2m1 0h1m2 0h1M0 12h1m5 0h11m1 0h1M0 13h1m5 0h1m6 0h4m1 0h1M0 14h1m5 0h11m1 0h1m2 0h7M0 15h1m5 0h1m6 0h4m1 0h1m2 0h1M0 16h1m5 0h11m1 0h1m2 0h1M0 17h1m17 0h1m2 0h1M0 18h1m4 0h14M0 19h1m-1 1h1m-1 1h1m-1 1h1m8 0h1M0 23h1m5 0h1m2 0h1M0 24h1m6 0h1m1 0h1M0 25h1m8 0h1M0 26h1m4 0h5M0 27h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M1 1h29M1 2h1m27 0h1M1 3h1m27 0h1M1 4h1m27 0h1M1 5h1m27 0h1M1 6h29M1 7h29M1 8h3m15 0h2m7 0h2M1 9h3m15 0h2m1 0h4m2 0h2M1 10h3m13 0h1m1 0h2m1 0h4m2 0h2M1 11h3m13 0h1m1 0h2m7 0h2M1 12h3m13 0h1m1 0h2m7 0h2M1 13h3m13 0h1m1 0h11M1 14h3m13 0h1m1 0h2m7 0h2M1 15h3m13 0h1m1 0h2m1 0h4m2 0h2M1 16h3m13 0h1m1 0h2m1 0h4m2 0h2M1 17h3m2 0h12m1 0h2m7 0h2M1 18h3m15 0h2m7 0h2M1 19h29M1 20h29M1 21h3m6 0h20M1 22h3m6 0h20M1 23h3m3 0h1m2 0h2m15 0h3M1 24h3m2 0h1m3 0h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M1 25h3m6 0h2m15 0h3M1 26h3m6 0h20M1 27h29M1 28h29M1 29h29" /><path stroke="gray" d="M30 1h1m-1 1h1M3 3h2m25 0h1M3 4h2m25 0h1m-1 1h1m-1 1h1m-1 1h1M4 8h15m11 0h1M4 9h1m21 0h1m3 0h1M4 10h1m21 0h1m3 0h1M4 11h1m2 0h8m7 0h5m3 0h1M4 12h1m25 0h1M4 13h1m2 0h6m17 0h1M4 14h1m25 0h1M4 15h1m2 0h6m13 0h1m3 0h1M4 16h1m21 0h1m3 0h1M4 17h1m17 0h5m3 0h1M4 18h1m25 0h1m-1 1h1m-1 1h1M4 21h6m20 0h1M4 22h1m25 0h1M4 23h1m3 0h1m3 0h15m3 0h1M4 24h1m3 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M4 25h1m1 0h3m3 0h15m3 0h1M4 26h1m25 0h1m-1 1h1m-1 1h1m-1 1h1M1 30h30" /><path stroke="#000" d="M31 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M5 9h13m9 0h1m3 0h1M5 10h1m21 0h1m3 0h1M5 11h1m21 0h1m3 0h1M5 12h1m15 0h7m3 0h1M5 13h1m25 0h1M5 14h1m25 0h1M5 15h1m21 0h1m3 0h1M5 16h1m21 0h1m3 0h1M5 17h1m21 0h1m3 0h1m-11 1h7m3 0h1m-1 1h1m-1 1h1m-1 1h1M5 22h4m22 0h1M5 23h1m25 0h1M5 24h1m25 0h1M5 25h1m25 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 31h32" /><path stroke="navy" d="M2 2h27M2 3h1m2 0h24M2 4h1m2 0h24M2 5h27" /></svg>;

export const fm20enu5Data = {
  '32x32_4': Fm20enu5_32x32_4
};

export interface Fm20enu5Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Fm20enu5: React.FC<Fm20enu5Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = fm20enu5Data[variant];

  return <Svg {...rest} />;
};
