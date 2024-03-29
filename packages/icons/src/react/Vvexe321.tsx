import React from 'react';
import type { SVGProps } from "react";

const Vvexe321_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M6 6h3m6 0h2M5 7h1m3 0h1m4 0h1m2 0h1M5 8h1m3 0h1m4 0h1m2 0h1M5 9h14M4 10h1m14 0h1M4 11h1m14 0h1M3 12h1m16 0h3m1 0h3M3 13h1m5 0h1m2 0h1m2 0h2m1 0h2m3 0h1m2 0h1M2 14h1m5 0h1m2 0h1m3 0h1m1 0h1m2 0h1m3 0h1m2 0h1M2 15h1m6 0h1m2 0h1m2 0h1m2 0h1m2 0h1m5 0h1M1 16h1m4 0h11m2 0h1m8 0h1M1 17h1m15 0h1m10 0h1M1 18h1m14 0h1m1 0h1m9 0h1M1 19h1m14 0h1m2 0h1m9 0h1M1 20h1m14 0h1m11 0h3M1 21h1m15 0h1m9 0h1m2 0h1M1 22h1m16 0h1m7 0h1m3 0h1M2 23h20m4 0h1m2 0h1M2 24h1m18 0h2m2 0h1m2 0h1M2 25h23m2 0h1M3 26h19m2 0h3" /><path stroke="#fff" d="M6 7h2m7 0h1M6 8h1m-1 2h11M6 11h3m1 0h1m1 0h1m1 0h1m1 0h2M5 12h3m1 0h1m1 0h1m1 0h1m2 0h4M4 13h3m7 0h1m2 0h1m3 0h2m2 0h1M4 14h2m13 0h1m2 0h2m1 0h1M4 15h2m1 0h2m1 0h2m1 0h2m1 0h1m3 0h1m1 0h4M3 16h3m11 0h1m2 0h6M3 17h14m1 0h9M2 18h1m14 0h1m1 0h8m-10 1h2m1 0h7m-9 1h9m-8 1h7m-6 1h6m-3 1h2" /><path stroke="gray" d="M8 7h1m7 0h1M8 8h1m7 0h1m-9 4h1m1 0h1m1 0h1m1 0h2m-9 1h1m12 0h1m3 0h1M6 14h1m3 0h1m1 0h3m1 0h1m1 0h1m2 0h1M6 15h1m10 0h1m10 0h1M2 16h1m15 0h1m10 2h1M4 19h12M3 20h13m1 0h1M3 21h14m1 0h1m7 0h1m1 0h2M3 22h15m1 0h1m7 0h3m-8 1h1m2 0h1m1 0h2M3 24h18m2 0h2m1 0h2m-3 1h2" /><path stroke="silver" d="M7 8h1m7 0h1M5 10h1m11 0h2M5 11h1m3 0h1m1 0h1m1 0h1m1 0h1m2 0h1M4 12h1m3 1h1m1 0h2m1 0h1M3 14h1m3 0h1m1 0h1m16 0h1M3 15h1m15 0h1m6 0h1m-1 1h2M2 17h1m24 0h1M3 18h13m11 0h1M2 19h2m23 0h2M2 20h1m24 0h1M2 21h1m-1 1h1" /></svg>;

export const vvexe321Data = {
  '32x32_4': Vvexe321_32x32_4
};

export interface Vvexe321Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Vvexe321: React.FC<Vvexe321Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = vvexe321Data[variant];

  return <Svg {...rest} />;
};
