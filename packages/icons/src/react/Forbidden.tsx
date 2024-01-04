import React from 'react';
import type { SVGProps } from "react";

const Forbidden_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M2 2h28M2 3h1m26 0h1M2 4h1m26 0h1M2 5h1m26 0h1M2 6h1m26 0h1M2 7h1m26 0h1M2 8h1m26 0h1M2 9h1m26 0h1M2 10h1m26 0h1M2 11h1m26 0h1M2 12h1m26 0h1M2 13h1m26 0h1M2 14h1m26 0h1M2 15h1m26 0h1M2 16h1m26 0h1M2 17h1m26 0h1M2 18h1m26 0h1M2 19h1m26 0h1M2 20h1m26 0h1M2 21h1m26 0h1M2 22h1m26 0h1M2 23h1m26 0h1M2 24h1m26 0h1M2 25h1m26 0h1M2 26h1m26 0h1M2 27h1m26 0h1M2 28h1m26 0h1M2 29h28" /><path stroke="#fff" d="M3 3h26M3 4h11m4 0h11M3 5h8m10 0h8M3 6h6m14 0h6M3 7h5m16 0h5M3 8h4m6 0h7m5 0h4M3 9h3m5 0h10m5 0h3M3 10h2m5 0h10m7 0h2M3 11h2m4 0h10m8 0h2M3 12h1m4 0h10m4 0h2m4 0h1M3 13h1m3 0h10m4 0h4m3 0h1M3 14h1m3 0h9m4 0h5m3 0h1M3 15h1m3 0h8m4 0h6m3 0h1M3 16h1m3 0h7m4 0h7m3 0h1M3 17h1m3 0h6m4 0h8m3 0h1M3 18h1m3 0h5m4 0h9m3 0h1M3 19h1m3 0h4m4 0h10m3 0h1M3 20h1m4 0h2m4 0h10m4 0h1M3 21h2m8 0h11m3 0h2M3 22h2m7 0h11m4 0h2M3 23h3m5 0h11m4 0h3M3 24h4m6 0h7m5 0h4M3 25h5m16 0h5M3 26h7m13 0h6M3 27h9m9 0h8M3 28h26" /><path stroke="red" d="M14 4h4m-7 1h10M9 6h14M8 7h16M7 8h6m7 0h5M6 9h5m10 0h5M5 10h5m10 0h7M5 11h4m10 0h8M4 12h4m10 0h4m2 0h4M4 13h3m10 0h4m4 0h3M4 14h3m9 0h4m5 0h3M4 15h3m8 0h4m6 0h3M4 16h3m7 0h4m7 0h3M4 17h3m6 0h4m8 0h3M4 18h3m5 0h4m9 0h3M4 19h3m4 0h4m10 0h3M4 20h4m2 0h4m10 0h4M5 21h8m11 0h3M5 22h7m11 0h4M6 23h5m11 0h4M7 24h6m7 0h5M8 25h16m-14 1h13m-11 1h9" /></svg>;
const Forbidden_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M1 1h14M1 2h1m12 0h1M1 3h1m12 0h1M1 4h1m12 0h1M1 5h1m12 0h1M1 6h1m12 0h1M1 7h1m12 0h1M1 8h1m12 0h1M1 9h1m12 0h1M1 10h1m12 0h1M1 11h1m12 0h1M1 12h1m12 0h1M1 13h1m12 0h1M1 14h14" /><path stroke="#fff" d="M2 2h12M2 3h5m2 0h5M2 4h3m2 0h2m2 0h3M2 5h2m1 0h5m2 0h2M2 6h2m1 0h4m1 0h1m1 0h2M2 7h1m1 0h4m1 0h3m1 0h1M2 8h1m1 0h3m1 0h4m1 0h1M2 9h2m1 0h1m1 0h4m1 0h2M2 10h2m2 0h5m1 0h2M2 11h3m2 0h2m2 0h3M2 12h5m2 0h5M2 13h12" /><path stroke="red" d="M7 3h2M5 4h2m2 0h2M4 5h1m5 0h2M4 6h1m4 0h1m1 0h1M3 7h1m4 0h1m3 0h1M3 8h1m3 0h1m4 0h1M4 9h1m1 0h1m4 0h1m-8 1h2m5 0h1m-7 1h2m2 0h2m-4 1h2" /></svg>;

export const forbiddenData = {
  '32x32_4': Forbidden_32x32_4,
  '16x16_4': Forbidden_16x16_4
};

export interface ForbiddenProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Forbidden: React.FC<ForbiddenProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = forbiddenData[variant];

  return <Svg {...rest} />;
};
