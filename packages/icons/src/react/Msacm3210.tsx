import React from 'react';
import type { SVGProps } from "react";

const Msacm3210_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M24 1h1m-1 1h1m-1 1h1m-1 1h1m-6 1h2m2 0h1m1 0h1m-7 1h2m2 0h1m1 0h1m-8 1h3m2 0h1m1 0h1m-9 1h1m1 0h2m2 0h1m1 0h1m4 0h1M16 9h1m2 0h2m2 0h1m1 0h1m4 0h1m-16 1h1m3 0h2m2 0h1m1 0h1m4 0h1M6 11h1m7 0h1m4 0h2m2 0h1m1 0h1m4 0h1M2 12h1m3 0h1m6 0h1m5 0h2m1 0h1m3 0h1m3 0h1M2 13h1m3 0h1m4 0h2m6 0h2m1 0h1m3 0h1m3 0h1M2 14h1m2 0h1m1 0h1m1 0h2m8 0h2m1 0h1m3 0h1m2 0h1M1 15h1m1 0h1m1 0h1m1 0h1m1 0h1m9 0h2m1 0h1m3 0h1m2 0h1M1 16h1m1 0h1m1 0h1m1 0h1m1 0h1m9 0h2m1 0h1m3 0h1m2 0h1M1 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h2m5 0h1m2 0h1M1 18h1m1 0h1m1 0h1m3 0h3m7 0h2m5 0h1m2 0h1M1 19h1m1 0h1m1 0h1m5 0h2m6 0h2m6 0h1m1 0h1M3 20h1m1 0h1m7 0h1m5 0h2m6 0h1m1 0h1M4 21h1m9 0h1m4 0h2m6 0h1m1 0h1M4 22h1m10 0h1m3 0h2m6 0h1m1 0h1M4 23h1m11 0h1m2 0h2m6 0h1m1 0h1M4 24h1m12 0h1m1 0h2m6 0h1m1 0h1m-12 1h3m6 0h2m-10 1h2m7 0h1m-10 1h2m7 0h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="gray" d="M18 8h1m-2 1h1m-2 1h1m-2 1h1m2 0h1m-5 1h1m2 0h1m-5 1h1m2 0h1m1 0h1m-8 1h2m2 0h1m1 0h2m-8 1h1m2 0h1m1 0h3m-8 1h1m1 0h1m1 0h4m-9 1h1m1 0h7m-7 1h7m-6 1h6m-5 1h5m-4 1h4m-3 1h3m-2 1h2m-1 1h1" /><path stroke="#fff" d="M18 9h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 1h1m1 0h1" /><path stroke="silver" d="M18 10h1m-2 1h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-6 1h1m1 0h1m1 0h1" /></svg>;

export const msacm3210Data = {
  '32x32_4': Msacm3210_32x32_4
};

export interface Msacm3210Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Msacm3210: React.FC<Msacm3210Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = msacm3210Data[variant];

  return <Svg {...rest} />;
};
