import React from 'react';
import type { SVGProps } from "react";

const Filexfer130_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M5 0h17M5 1h1m15 0h1M5 2h1m15 0h2M5 3h1m15 0h1m1 0h1M5 4h1m15 0h1m2 0h1M5 5h1m15 0h1m3 0h1M5 6h1m15 0h1M5 7h1M5 8h1M5 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m14 4h1m1 0h1M5 20h1m20 0h1M5 21h1m17 0h1M5 22h1m-1 1h1m-1 1h1m10 0h1M5 25h1m9 0h1m1 0h2M5 26h1m9 0h1m3 0h2m7 0h1M5 27h1m9 0h1m5 0h1m4 0h3m-5 1h3m-5 1h3m-3 1h1" /><path stroke="#fff" d="M6 1h15M6 2h15M6 3h15M6 4h15m1 0h1M6 5h7m5 0h3m1 0h2M6 6h15M6 7h20M6 8h20M6 9h2m16 0h2M6 10h20M6 11h2m16 0h2M6 12h4m1 0h15M6 13h2m16 0h2M6 14h4m3 0h13m-2 1h2m-11 1h4m5 0h2m-11 2h2m4 1h1M6 20h4m3 0h4M6 21h2m-2 1h4m1 0h5m7 0h1M6 23h2m9 0h2m3 0h1M6 24h10m3 0h2M6 25h9m1 0h1m4 0h1M6 26h9m2 0h2m0 1h2m0 1h1" /><path stroke="#000" d="M22 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-5 1h6m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-13 1h1m11 0h1m-14 1h1m6 0h1M0 19h10m3 0h1m5 0h2m1 0h1m-11 1h1m5 0h1m3 0h2m1 0h1m-15 1h1m12 0h1m1 0h1m2 0h1m-20 1h1m15 0h1m2 0h1m-4 1h1m2 0h1m-3 1h2m-3 1h2m1 0h1m-6 1h2m3 0h1m-8 1h2m5 0h1M5 28h12m10 0h2m-12 1h2m6 0h2m-8 1h2m2 0h2m-4 1h2" /><path stroke="silver" d="M22 3h1m0 1h1m0 1h1m1 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-7 3h1m-2 1h1m1 0h1m-4 1h1m1 0h1m1 0h1m2 0h1m-5 1h1m2 0h1m-2 1h1m4 1h1m-3 1h2M6 27h9m1 0h2m6 0h2m-9 1h3m2 0h2m-5 1h3m-1 1h1" /><path stroke="#00f" d="M13 5h5M8 9h16M8 11h16M8 13h2m2 0h12m-10 2h10m-8 2h2m-4 2h3m-9 2h2m2 0h5m-9 2h8" /><path stroke="maroon" d="M10 12h1m-1 1h2m-2 1h1m1 0h1M0 15h11m2 0h1M0 16h1m13 0h1M0 17h1m-1 1h14m-4 1h3m-3 1h2m-2 1h1" /><path stroke="red" d="M11 14h1m0 1h1m0 1h1M1 17h14m3 10h1m1 1h1" /><path stroke="#f0f" d="M11 15h1M1 16h12" /><path stroke="olive" d="M19 16h5m-6 1h1m5 0h2m-9 1h1m8 0h2m-11 1h1m5 0h1m4 0h1m-12 1h1m6 0h1m4 0h1m-13 1h1m2 0h1m-5 1h1m2 0h1m1 0h1m6 0h1m-13 1h1m3 0h1m4 0h1m1 0h2m-5 1h3m-5 1h4m-4 1h2" /><path stroke="#ff0" d="M19 17h5m-6 1h2m3 0h3m-8 1h1m5 0h4m-9 1h1m1 0h1m5 0h2m-11 1h1m3 0h1m2 0h1m1 0h2m-12 1h1m6 0h1m2 0h1m-9 1h1m3 0h1m-7 1h2m2 0h2m-4 1h2m0 1h1" /><path stroke="#0f0" d="M16 26h1" /></svg>;

export const filexfer130Data = {
  '32x32_4': Filexfer130_32x32_4
};

export interface Filexfer130Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Filexfer130: React.FC<Filexfer130Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = filexfer130Data[variant];

  return <Svg {...rest} />;
};
