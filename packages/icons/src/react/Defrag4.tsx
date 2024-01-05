import React from 'react';
import type { SVGProps } from "react";

const Defrag4_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M19 6h1m2 0h1m0 1h1m-9 1h1m8 0h1m0 1h1m-15 1h1m14 0h1m0 1h1M7 12h1m20 0h1m0 1h1M3 14h1m26 0h1m-1 1h1m-3 1h1m1 0h1m-4 1h1m1 0h2m-7 1h1m2 0h1m1 0h2m-8 1h1m1 0h1m1 0h1m1 0h1m-10 1h1m2 0h1m1 0h3m1 0h1M2 21h1m16 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 22h1m12 0h1m2 0h1m1 0h3m1 0h1m2 0h1M4 23h2m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 24h1m5 0h1m2 0h1m1 0h3m1 0h1m2 0h1m-14 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 26h1m3 0h1m1 0h3m1 0h1m2 0h1M8 27h1m2 0h1m1 0h1m1 0h1m1 0h1m-9 1h3m1 0h1m2 0h1m-6 1h1m1 0h1m-2 1h1" /><path stroke="gray" d="M20 6h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2m23 0h1M2 15h2m23 0h3M1 16h1m23 0h3m1 0h1M1 17h1m21 0h4M1 18h1m19 0h3m1 0h2m1 0h1M1 19h1m3 0h3m11 0h4m3 0h1m1 0h1M1 20h1m2 0h2m2 0h1m8 0h3m1 0h2m1 0h1m3 0h1M4 21h2m1 0h1m7 0h4m3 0h1m1 0h1m3 0h1M4 22h2m1 0h1m5 0h3m1 0h2m1 0h1m3 0h1M7 23h1m3 0h4m3 0h1m1 0h1m3 0h1M7 24h1m2 0h2m1 0h2m1 0h1m3 0h1M7 25h1m2 0h1m3 0h1m1 0h1m3 0h1m-11 1h1m1 0h1m3 0h1m-7 1h1m1 0h1m3 0h1m-5 1h1m-1 1h1" /><path stroke="silver" d="M20 7h3m-5 1h6m-8 1h9m-11 1h12m-14 1h15m-17 1h18M8 13h21M6 14h23M4 15h23M2 16h23M3 17h20m5 0h1M2 18h1m1 0h17M2 19h2m4 0h11m5 0h1M2 20h2m2 0h2m1 0h8M3 21h1m2 0h1m1 0h7m5 0h1M6 22h1m1 0h5m-7 1h1m2 0h2m5 0h1m-9 1h1m-1 1h2m2 0h1m-5 1h2m-1 1h1" /><path stroke="#fff" d="M2 17h1m0 1h1m0 1h1m3 4h1m0 1h1" /></svg>;
const Defrag4_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M10 3h2M8 4h1m3 0h1M6 5h1m6 0h1M4 6h1m9 0h1M2 7h1m12 0h1m-1 1h1m-3 1h1m1 0h1M0 10h1m10 0h1m2 0h1M1 11h1m7 0h1m2 0h1m1 0h1M2 12h1m4 0h1m2 0h1m1 0h1M3 13h1m1 0h1m2 0h1m1 0h1m-7 1h1m1 0h1m1 0h1m-3 1h1" /><path stroke="gray" d="M9 4h1M7 5h1M5 6h1M3 7h1m10 0h1M1 8h1m10 0h3M0 9h1m9 0h3m-5 1h3m2 0h1M2 11h1m3 0h3m2 0h1m-9 1h1m1 0h2m2 0h1m-3 1h1m-3 1h1" /><path stroke="silver" d="M10 4h2M8 5h5M6 6h8M4 7h10M2 8h10M2 9h8m4 0h1M1 10h1m1 0h5m4 0h1m-9 1h2m4 0h1m-3 1h1m-5 1h1m1 0h1" /><path stroke="#fff" d="M1 9h1m0 1h1m0 1h1m0 1h1" /></svg>;

export const defrag4Data = {
  '32x32_4': Defrag4_32x32_4,
  '16x16_4': Defrag4_16x16_4
};

export interface Defrag4Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag4: React.FC<Defrag4Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = defrag4Data[variant];

  return <Svg {...rest} />;
};
