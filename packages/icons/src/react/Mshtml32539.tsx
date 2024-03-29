import React from 'react';
import type { SVGProps } from "react";

const Mshtml32539_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M0 0h18M0 1h1m16 0h1M0 2h1m16 0h2M0 3h1m16 0h1m1 0h1M0 4h1m16 0h1m2 0h1M0 5h1m16 0h1m3 0h1M0 6h1m16 0h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m17 0h7M0 14h1m15 0h2m7 0h2M0 15h1m14 0h1m11 0h1M0 16h1m13 0h1m13 0h1M0 17h1m12 0h1m15 0h1M0 18h1m11 0h1m17 0h1M0 19h1m11 0h1m6 0h1m4 0h1m6 0h1M0 20h1m11 0h1m8 0h1m1 0h1m7 0h1M0 21h1m11 0h1m9 0h1m8 0h1M0 22h1m11 0h1m9 0h1m8 0h1M0 23h1m12 0h1m16 0h2M0 24h1m13 0h1m14 0h2M0 25h1m14 0h1m12 0h2M0 26h1m26 0h2M0 27h1m19 0h1m4 0h3M0 28h1m23 0h2m-2 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M1 1h16M1 2h16M1 3h16M1 4h16m1 0h1M1 5h16m1 0h2M1 6h3m9 0h4M1 7h21M1 8h21M1 9h21M1 10h3m16 0h2M1 11h21M1 12h3m16 0h2M1 13h17M1 14h3m15 0h2m1 0h3M1 15h14m1 0h3m1 0h3m1 0h3M1 16h3m11 0h2m1 0h1m5 0h1m1 0h2M1 17h12m1 0h1m1 0h3m2 0h1m3 0h2m1 0h1M1 18h3m10 0h3m1 0h1m2 0h1m4 0h3M1 19h11m1 0h2m1 0h3m2 0h1m3 0h2m1 0h2M1 20h3m10 0h3m1 0h3m3 0h1m1 0h3M1 21h11m1 0h2m1 0h3m1 0h1m3 0h3m1 0h2M1 22h3m10 0h3m1 0h3m2 0h2m1 0h3M1 23h12m1 0h1m1 0h3m1 0h3m1 0h3m1 0h1M1 24h3m11 0h2m1 0h3m2 0h2m1 0h2M1 25h14m2 0h2m1 0h1m3 0h2M1 26h15m3 0h2m1 0h3M1 27h17m3 0h2m-1 1h1m-1 1h1" /><path stroke="#000" d="M18 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-5 1h6m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m6 7h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m-2 1h1m-12 1h2m7 0h2m-9 1h2m3 0h2m-5 1h1m2 0h1M0 29h22m1 0h1m-2 1h2m-1 1h1" /><path stroke="silver" d="M18 3h1m0 1h1m0 1h1M4 6h9m9 1h1m-1 1h1m-1 1h1M4 10h16m2 0h1m-1 1h1M4 12h16m2 0h1M4 14h12m2 0h1M4 16h10m5 0h1m0 1h1M4 18h8m1 0h1m15 0h1M4 20h8m-8 2h8m1 0h1m15 0h1M4 24h10m2 1h1m9 0h1m-9 1h1M1 28h19" /><path stroke="#ff0" d="M21 14h1m-3 1h1m3 0h1m-7 1h1m7 0h1m-11 1h1m11 0h1m-11 1h1m7 0h1m-11 1h1m11 0h1m-15 1h1m3 0h1m7 0h1m3 0h1m-15 1h1m3 0h1m3 0h1m3 0h1m-11 1h1m7 0h1m-11 1h1m3 0h1m3 0h1m3 0h1m-11 1h1m7 0h1m-7 1h1m3 0h1m-3 1h1m-1 2h1" /><path stroke="#00f" d="M20 16h4m-5 1h1m2 0h3m-6 1h2m1 0h3m-5 1h1m1 0h2m-2 1h1m-2 1h1m-1 1h1m-1 2h2m-2 1h2" /></svg>;

export const mshtml32539Data = {
  '32x32_4': Mshtml32539_32x32_4
};

export interface Mshtml32539Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mshtml32539: React.FC<Mshtml32539Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mshtml32539Data[variant];

  return <Svg {...rest} />;
};
