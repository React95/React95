import React from 'react';
import type { SVGProps } from "react";

const Inetcfg2301_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M20 0h3m-5 1h2m3 0h2m-8 1h1m4 0h2m1 0h1M16 3h1m4 0h1m1 0h1m2 0h1M15 4h1m4 0h1m2 0h1m3 0h1M14 5h1m4 0h1m3 0h1m3 0h1M13 6h1m5 0h1m3 0h1m4 0h1M12 7h1m6 0h1m3 0h1m4 0h1M11 8h1m7 0h1m3 0h1m4 0h1M10 9h1m8 0h1m2 0h1m5 0h1M9 10h1m9 0h1m1 0h1m6 0h1M8 11h4m7 0h1m1 0h1m6 0h1M7 12h7m5 0h1m1 0h1m6 0h1M6 13h9m4 0h1m1 0h1m6 0h1M5 14h11m3 0h1m1 0h1m6 0h1M4 15h13m2 0h1m1 0h1m6 0h1M4 16h13m2 0h1m1 0h1m6 0h1M3 17h15m1 0h1m1 0h1m6 0h1M3 18h15m1 0h1m1 0h1m6 0h1M3 19h15m1 0h1m1 0h1m6 0h1M3 20h15m1 0h1m1 0h1m6 0h1M3 21h15m1 0h2m6 0h1M3 22h15m8 0h1M3 23h11m3 0h1m7 0h1M3 24h8m1 0h1m2 0h1m1 0h1m6 0h1M3 25h7m1 0h1m2 0h1m2 0h1m5 0h1M3 26h6m1 0h1m2 0h1m3 0h1m4 0h1M3 27h5m1 0h1m7 0h1m3 0h1M3 28h4m1 0h10m2 0h1M3 29h3m11 0h1m1 0h1M3 30h2m12 0h2M3 31h15" /><path stroke="silver" d="M20 1h2m-3 1h2m-3 1h2m4 0h2m-9 1h2m5 0h3M16 5h2m6 0h3M15 6h2m7 0h2m1 0h1M14 7h2m2 0h1m5 0h1m1 0h1M13 8h2m2 0h1m7 0h1M12 9h2m2 0h1m1 0h1m5 0h1m-14 1h2m2 0h1m1 0h2m4 0h1m-10 1h1m1 0h3m3 0h1m-8 1h4m-4 1h4m-3 1h2m0 1h1m-2 1h1m-7 8h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h11M5 30h12" /><path stroke="#fff" d="M22 1h1m-2 1h1m2 0h1m-5 1h1m-2 1h1m-2 1h1m-2 1h2m-3 1h2m-3 1h2m1 0h1m-5 1h2m1 0h1m-5 1h2m1 0h1m-5 1h2m1 0h1m4 0h1m-7 1h1m5 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-7 3h3m-4 1h2m1 0h1m-5 1h2m1 0h2m-6 1h2m1 0h3m-7 1h7" /><path stroke="gray" d="M18 2h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m11 0h1M13 7h1m11 0h1m1 0h1M12 8h1m11 0h1m1 0h2M11 9h1m11 0h1m1 0h3m-18 1h1m11 0h1m1 0h4m-5 1h5m-6 1h6m-6 1h6m-10 1h1m3 0h6m-11 1h1m4 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m3 0h6m-10 1h1m2 0h6m-9 1h8m-8 1h7m-7 1h6m-6 1h5m-5 1h4m-4 1h3m-3 1h2m-2 1h1" /><path stroke="red" d="M22 3h1m-2 1h2m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h2m-2 1h1" /></svg>;

export const inetcfg2301Data = {
  '32x32_4': Inetcfg2301_32x32_4
};

export interface Inetcfg2301Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Inetcfg2301: React.FC<Inetcfg2301Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcfg2301Data[variant];

  return <Svg {...rest} />;
};
