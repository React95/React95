import React from 'react';
import type { SVGProps } from "react";

const Inetcpl1315_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M5 0h14M4 1h1m13 0h1M3 2h1m13 0h2M2 3h1m14 0h2M2 4h1m1 0h11m2 0h2M2 5h1m1 0h1m12 0h2M2 6h1m1 0h1m12 0h2M2 7h1m1 0h1m12 0h2M2 8h1m1 0h1m12 0h2M2 9h1m1 0h1m12 0h2M2 10h1m1 0h1m6 0h16M2 11h1m1 0h1m6 0h1M2 12h1m8 0h1M2 13h1m8 0h1m4 0h16m-21 1h1m4 0h1M1 15h11m4 0h1M0 16h1m10 0h1m4 0h1M0 17h1m9 0h2m4 0h1M0 18h1m10 0h1m4 0h1M0 19h1m10 0h1m4 0h1M0 20h12m4 0h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-6 1h1m4 0h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M5 1h12M4 3h13m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m8 2h1m-1 1h1M3 13h8m19 1h1m-1 1h1m-1 1h1M2 17h8m20 0h1M2 18h2m2 0h4m20 0h1M2 19h2m2 0h5m19 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-19 1h4m14 0h1m-1 1h1m-1 1h1m-14 1h14" /><path stroke="#fff" d="M17 1h1M4 2h13M3 3h1M3 4h1m11 0h1M3 5h1m11 0h1M3 6h1m11 0h1M3 7h1m11 0h1M3 8h1m11 0h1M3 9h1m11 0h1M3 10h1m-1 1h1m8 0h13M3 12h8m1 0h13m-13 1h4m-4 1h4m1 0h13m-18 1h4m1 0h13M1 16h10m1 0h2m3 0h13M1 17h1m10 0h4m1 0h5m3 0h5M1 18h1m10 0h2m3 0h13M1 19h1m10 0h4m1 0h2m9 0h2m-18 1h2m3 0h13m-18 1h4m1 0h2m9 0h2m-18 1h2m3 0h13m-18 1h4m1 0h2m9 0h2m-18 1h2m3 0h13m-18 1h4m1 0h2m9 0h2m-18 1h4m1 0h13m-13 1h2m9 0h2m-13 1h13m-13 1h13" /><path stroke="#000" d="M19 1h1m-1 1h1m-1 1h1m-1 1h1M5 5h9m5 0h1M5 6h1m13 0h1M5 7h1m13 0h1M5 8h1m13 0h1M5 9h1m13 0h1M5 10h1m20 1h1m-1 1h1M3 14h8m20 0h1m-1 1h1m-1 1h1m-1 1h1m-22 1h1m20 0h1m-1 1h1m-1 1h1M1 21h10m20 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-21 1h5m15 0h1m-1 1h1m-1 1h1m-16 1h16" /><path stroke="navy" d="M14 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M5 11h6" /><path stroke="#00f" d="M6 6h8M6 7h1m1 0h6M6 8h1m1 0h6M6 9h8m-8 1h5m3 6h2m6 1h3m-11 1h2m3 1h9m-14 1h2m3 1h9m-14 1h2m3 1h9m-14 1h2m3 1h9m-9 2h9" /><path stroke="#0ff" d="M7 7h1M7 8h1" /><path stroke="#0f0" d="M4 18h2" /><path stroke="green" d="M4 19h2" /><path stroke="red" d="M4 23h1m-2 1h1m-1 1h1m-1 1h1m3 0h1m-4 1h1m2 0h2m-4 1h5m-3 1h2m-2 1h1" /></svg>;

export const inetcpl1315Data = {
  '32x32_4': Inetcpl1315_32x32_4
};

export interface Inetcpl1315Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Inetcpl1315: React.FC<Inetcpl1315Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcpl1315Data[variant];

  return <Svg {...rest} />;
};
