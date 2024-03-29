import React from 'react';
import type { SVGProps } from "react";

const Inetcpl1311_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M10 0h12M10 1h1m11 0h1M10 2h1m12 0h1M10 3h1m-1 1h1M1 5h11M1 6h1m10 0h1M1 7h1m11 0h1M1 8h1M1 9h1m-1 1h1m-1 1h1m4 0h1m-6 1h1m8 0h1M1 13h1m-1 1h1m4 0h1m-6 1h1m2 0h1m7 0h17M1 16h1m10 0h1M1 17h1m10 0h1M1 18h1m10 0h1M1 19h1m10 0h1m1 0h10M1 20h1m10 0h1M1 21h1m10 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M11 1h10M11 2h10m1 0h1M11 3h1m8 0h1M11 4h12m-1 1h1M3 6h3m1 0h3m3 0h10M2 7h2m1 0h3m1 0h2m1 0h1m9 0h1M3 8h3m1 0h3m5 0h8M2 9h2m1 0h3m1 0h3m10 0h1M3 10h2m6 0h2m2 0h8M2 11h2m7 0h1m10 0h1M3 12h1m7 0h2m2 0h8M2 13h2m1 0h1m5 0h1m10 0h1M3 14h1m7 0h2m2 0h8M2 15h2m7 0h1m-9 1h1m7 0h1M2 17h2m6 0h2m-9 1h3m1 0h3m1 0h1M2 19h2m1 0h3m1 0h3m-9 1h3m1 0h3m1 0h1m1 1h15m-15 1h1m13 0h1m-15 1h15m-15 1h1m13 0h1m-15 1h15m-15 1h1m13 0h1m-15 1h15m-15 1h1m13 0h1m-15 1h15" /><path stroke="silver" d="M21 1h1m-1 1h1M12 3h8m3 1h1M12 5h10m1 0h1M11 6h1m11 0h1M11 7h1m2 0h8m1 0h1m-1 1h1M13 9h1m1 0h7m1 0h1M5 10h1m3 0h1m3 0h1m9 0h1M4 11h1m5 0h1m2 0h1m1 0h7m1 0h1M5 12h1m7 0h1m9 0h1M6 13h1m6 0h1m1 0h7m1 0h1M5 14h1m7 0h1m9 0h1M4 16h1m5 0h1m-6 1h1m3 0h1m3 1h16m-16 1h1m10 0h1m2 0h2m-16 1h16M2 21h10m16 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-16 1h16" /><path stroke="#000" d="M21 3h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1M11 8h4m9 0h1M14 9h1m9 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m4 1h1M9 16h1m19 0h1M6 17h3m20 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 22h11m17 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-18 1h18" /><path stroke="#ff0" d="M2 6h1m3 0h1m3 0h1M4 7h1m3 0h1M2 8h1m3 0h1m3 0h1M4 9h1m3 0h1m3 0h1M2 10h1m7 0h1m1 1h1M2 12h1m9 1h1M2 14h1m-1 2h1m1 1h1m-3 1h1m3 0h1m3 0h1m-7 1h1m3 0h1m-7 1h1m3 0h1m3 0h1" /><path stroke="teal" d="M6 10h3m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-5 1h1m-1 1h1m3 0h1" /><path stroke="green" d="M8 11h1m0 1h1m-3 1h1m-1 1h1m-1 1h1" /><path stroke="#00f" d="M7 12h1m1 1h1m-1 1h1m-5 1h2m1 0h1m-3 1h1m7 6h13m-13 2h13m-13 2h13m-13 2h13" /><path stroke="navy" d="M8 13h1m1 0h1m-1 1h1m-2 1h2m-6 1h1m1 0h2m4 0h16m-16 1h16m-4 2h2" /></svg>;

export const inetcpl1311Data = {
  '32x32_4': Inetcpl1311_32x32_4
};

export interface Inetcpl1311Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Inetcpl1311: React.FC<Inetcpl1311Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcpl1311Data[variant];

  return <Svg {...rest} />;
};
