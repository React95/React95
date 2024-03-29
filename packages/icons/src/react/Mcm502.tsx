import React from 'react';
import type { SVGProps } from "react";

const Mcm502_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M10 0h3m-3 1h3m-3 1h3" /><path stroke="green" d="M2 4h1M1 5h3M0 6h5M1 7h3M2 8h1" /><path stroke="#000" d="M10 4h4M8 5h2m4 0h2M7 6h1m3 0h6M6 7h1m3 0h2m3 0h3M5 8h2m2 0h1m7 0h2m5 0h3M5 9h1m2 0h1m9 0h1m3 0h4m1 0h2M5 10h1m2 0h1m4 0h4m1 0h1m1 0h2m4 0h1m2 0h1M4 11h1m3 0h1m3 0h2m2 0h2m2 0h1m6 0h1m1 0h1M4 12h1m2 0h1m4 0h1m1 0h2m2 0h2m7 0h1m2 0h1M4 13h1m2 0h1m4 0h1m3 0h2m1 0h1m8 0h1m1 0h1M4 14h1m2 0h1m4 0h1m5 0h2m9 0h1m1 0h1M4 15h1m2 0h1m4 0h1m16 0h1m1 0h1M4 16h1m2 0h1m4 0h1m16 0h1m1 0h1M4 17h1m2 0h1m4 0h1m11 0h2m3 0h1m1 0h1M5 18h1m2 0h1m3 0h1m10 0h2m1 0h1m2 0h1m1 0h1M5 19h1m2 0h1m3 0h2m9 0h2m1 0h1m2 0h1m1 0h1M5 20h2m1 0h1m5 0h2m7 0h4m2 0h1m1 0h1M6 21h1m2 0h1m6 0h2m6 0h2m3 0h1m1 0h1M7 22h1m2 0h2m3 0h2m1 0h1m10 0h1m1 0h1M8 23h2m1 0h5m2 0h1m10 0h1m1 0h1m-22 1h4m4 0h1m10 0h1m1 0h1m-13 1h1m9 0h1m1 0h1m-13 1h1m8 0h3m-11 1h1m7 0h1m1 0h1m-11 1h1m6 0h3m-9 1h1m4 0h3m-7 1h6" /><path stroke="silver" d="M10 5h4M8 6h3M7 7h3M7 8h2M6 9h2m-2 1h2m-3 1h3m6 0h2M5 12h2m9 0h2M5 13h2m11 0h1M5 14h2m-2 1h2m-2 1h2m-2 1h2m-1 1h2m-2 1h2m-1 1h1m-1 1h2m-1 1h2m0 1h1" /><path stroke="gray" d="M12 7h3m-5 1h7M9 9h9m8 0h1M9 10h4m4 0h1m9 0h2M9 11h3m16 0h1M8 12h4m16 0h2M8 13h4m17 0h1M8 14h4m18 0h1M8 15h4m18 0h1M8 16h4m18 0h1M8 17h4m18 0h1M9 18h3m18 0h1M9 19h3m18 0h1M9 20h5m16 0h1m-21 1h6m14 0h1m-19 1h3m15 0h1m-1 1h1m-1 1h1m-1 1h1m-2 2h1" /><path stroke="#fff" d="M22 10h4m-5 1h6m-14 1h1m6 0h7m-14 1h3m4 0h8m-15 1h5m2 0h9m-16 1h16m-16 1h16m-16 1h11m2 0h3m-16 1h10m4 0h2m-15 1h9m4 0h2m-13 1h7m4 0h2m-11 1h6m2 0h3m-10 1h10m-10 1h10m-10 1h10m-9 1h9m-9 1h8m-7 1h7m-7 1h6m-5 1h4" /></svg>;

export const mcm502Data = {
  '32x32_4': Mcm502_32x32_4
};

export interface Mcm502Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mcm502: React.FC<Mcm502Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mcm502Data[variant];

  return <Svg {...rest} />;
};
