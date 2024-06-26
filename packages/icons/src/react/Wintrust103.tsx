import React from 'react';
import type { SVGProps } from "react";

const Wintrust103_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="green" d="M1 4h28M1 5h28M1 6h2m24 0h2M1 7h2m7 0h10m7 0h2M1 8h2m1 0h1m4 0h1m10 0h1m4 0h1m1 0h2M1 9h2m2 0h3m14 0h3m2 0h2M1 10h2m5 0h14m5 0h2M1 11h2m2 0h2m16 0h2m2 0h2M1 12h2m4 0h16m4 0h2M1 13h2m24 0h2M1 14h2m4 0h13m7 0h2M1 15h2m2 0h2m20 0h2M1 16h2m5 0h11m8 0h2M1 17h2m2 0h3m19 0h2M1 18h2m1 0h1m4 0h1m15 0h1m1 0h2M1 19h2m7 0h10m7 0h2M1 20h2m24 0h2M1 21h18m6 0h4M1 22h17m7 0h4" /><path stroke="#fff" d="M3 6h24M3 7h7m10 0h7M3 8h1m1 0h4m1 0h10m1 0h4m1 0h1M3 9h2m3 0h14m3 0h2M3 10h5m14 0h5M3 11h2m2 0h16m2 0h2M3 12h4m16 0h4M3 13h24M3 14h4m17 0h3M3 15h2m2 0h12m6 0h2M3 16h5m17 0h2M3 17h2m3 0h11m6 0h2M3 18h1m1 0h4m1 0h10m4 0h1m1 0h1M3 19h7m14 0h3M3 20h16m6 0h2" /><path stroke="gray" d="M29 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-9 1h2m6 0h1m-10 1h3m6 0h1M8 23h10m2 0h3m2 0h5m-17 1h4m2 0h3m2 0h6m-11 1h1m4 0h1m-8 1h3m2 0h3" /><path stroke="red" d="M20 14h4m-5 1h6m-6 1h6m-6 1h6m-5 1h4m-4 1h4m-5 1h6m-6 1h2m2 0h2m-7 1h2m3 0h2m-7 1h2m3 0h2m-8 1h2m3 0h2m-7 1h2m3 0h2" /></svg>;

export const wintrust103Data = {
  '32x32_4': Wintrust103_32x32_4
};

export interface Wintrust103Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wintrust103: React.FC<Wintrust103Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wintrust103Data[variant];

  return <Svg {...rest} />;
};
