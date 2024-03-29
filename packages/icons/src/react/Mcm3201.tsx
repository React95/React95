import React from 'react';
import type { SVGProps } from "react";

const Mcm3201_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M12 1h7m-9 1h2m7 0h2M9 3h1m11 0h2M9 4h1m10 0h1m2 0h1M9 5h1m10 0h1m2 0h1M9 6h1m10 0h1m2 0h1M9 7h1m10 0h1m2 0h1M9 8h1m10 0h1m2 0h1M9 9h1m10 0h1m1 0h1M8 10h2m10 0h1m1 0h1M7 11h1m2 0h2m8 0h4m1 0h2M7 12h1m4 0h2m6 0h1m3 0h1m2 0h2M4 13h4m6 0h2m2 0h2m4 0h1m4 0h2M3 14h1m4 0h2m6 0h2m6 0h1m6 0h1M3 15h1m6 0h2m10 0h2m7 0h1M4 16h2m6 0h2m6 0h2m9 0h1M2 17h2m2 0h2m6 0h2m2 0h2m9 0h2M1 18h1m6 0h2m6 0h2m9 0h2M0 19h1m9 0h2m7 0h4m2 0h2M1 20h2m9 0h2m4 0h1m4 0h2M3 21h2m5 0h2m1 0h1m4 0h1m2 0h1m3 0h2M5 22h2m2 0h1m8 0h4m1 0h1m3 0h1M7 23h2m8 0h1m4 0h2m3 0h2m-13 1h1m7 0h1m2 0h2m-14 1h1m9 0h2m1 0h1m-14 1h1m11 0h1m-12 1h2m7 0h2m-9 1h2m3 0h2m-5 1h3" /><path stroke="silver" d="M12 2h2m2 0h3m-7 1h4m2 0h3M11 4h1m2 0h4m-6 1h2m2 0h3m-5 1h2m0 1h2m-1 1h1m-1 1h1m-7 1h2m4 0h1M8 11h1m3 0h3m2 0h1M8 12h3m3 0h4M8 13h5m3 0h2m-8 1h5m-3 1h5m-1 1h2M5 17h1m10 0h2M2 18h1m1 0h1m1 0h1m-6 1h1m3 0h1m1 0h1m1 0h1m-7 1h1m2 0h1m1 0h1m1 0h1m-6 1h1m3 0h1m-3 1h1m10 1h4m-5 1h1m1 0h1m1 0h3m-8 1h1m3 0h1m1 0h1m-7 1h3m2 0h1m-4 1h3m-1 1h1" /><path stroke="gray" d="M14 2h2m0 1h2m-8 1h1m7 0h2m1 0h2M10 5h1m8 0h1m1 0h2m1 0h1M10 6h1m7 0h2m1 0h2m1 0h4M10 7h1m7 0h2m1 0h2m1 0h7M10 8h1m7 0h2m1 0h2m1 0h8M10 9h1m7 0h2m1 0h1m1 0h7m-20 1h1m7 0h2m1 0h1m1 0h5m-10 1h2m4 0h1m2 0h2m-11 1h2m1 0h3m1 0h2m2 0h1m-10 1h4m1 0h4m-11 1h6m1 0h3m-10 1h4m2 0h2M3 16h1m2 0h1m8 0h1m2 0h2m2 0h1M4 17h1m3 0h1m11 0h1M3 18h1m1 0h1m1 0h1m2 0h1m7 0h1M4 19h1m1 0h1m1 0h1m3 0h1m-6 1h1m1 0h1m1 0h1m2 0h1m-7 1h1m3 0h1m1 0h2m4 0h1M8 22h1m1 0h4m8 0h1m3 0h1M9 23h2m14 0h2m-9 1h1m1 0h1m4 0h2m2 0h2m-12 1h1m1 0h1m1 0h2m2 0h1m1 0h3m-10 1h5m1 0h3m-10 1h4m2 0h2m-8 1h2m2 0h1m-3 1h1" /><path stroke="#fff" d="M10 3h2m0 1h2m0 1h2m0 1h2m-9 5h1m1 1h1m1 1h1m1 1h1m1 1h1m-4 1h1M2 19h2m0 1h2m13 0h4M6 21h2m11 0h1m2 0h3m-1 1h2m-2 1h1m-8 2h2m0 1h2" /><path stroke="#00f" d="M11 5h1m-1 1h3m-3 1h5m-5 1h6m-6 1h6m-4 1h4m-2 1h2" /></svg>;

export const mcm3201Data = {
  '32x32_4': Mcm3201_32x32_4
};

export interface Mcm3201Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mcm3201: React.FC<Mcm3201Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mcm3201Data[variant];

  return <Svg {...rest} />;
};
