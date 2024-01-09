import React from 'react';
import type { SVGProps } from "react";

const Drvspace3_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M16 3h15M16 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h7m2 0h6M16 9h6m1 0h8m-15 1h6m1 0h1m1 0h1m1 0h4m-15 1h10m1 0h4m-15 1h8m2 0h5m-15 1h15M3 14h21m2 0h5M2 15h1m13 0h8m2 0h5M1 16h1m14 0h8m2 0h5M0 17h1m15 0h15M0 18h1m-1 1h1m25 0h3M0 20h1m25 0h3M0 21h1m8 0h8m9 0h3M0 22h1m2 0h6m8 0h6m3 0h3M0 23h1m25 0h3M0 24h1m25 0h3M0 25h1m25 0h2M0 26h27" /><path stroke="#000" d="M31 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-9 1h2m6 0h1M22 9h1m8 0h1m-10 1h1m8 0h1m-1 1h1m-1 1h1m-1 1h1m-8 1h1m6 0h1m-8 1h1m6 0h1m-8 1h1m6 0h1m-1 1h1m-16 1h16m-3 1h1m-1 1h1m-1 1h1M9 22h8m12 0h1M9 23h8m12 0h1m-1 1h1m-2 1h1m-2 1h1M1 27h26" /><path stroke="#fff" d="M17 4h14M17 5h14M17 6h14M17 7h14m-7 3h1m1 0h1m-1 1h1m-3 1h2m-1 2h1m-1 1h1m-1 1h1M1 17h15M1 18h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h6m8 0h6M1 24h1m7 0h8M1 25h1" /><path stroke="silver" d="M3 15h13M2 16h14M2 18h14M2 19h19m2 0h3M2 20h19m2 0h3M2 21h7m8 0h9M2 22h1m20 0h3M2 23h1m20 0h3M2 24h7m8 0h9M2 25h24" /><path stroke="red" d="M21 19h2m-2 1h2" /></svg>;
const Drvspace3_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 3h13M1 4h1m12 0h1M0 5h1m12 0h2M0 6h1m12 0h2M0 7h1m4 0h4m4 0h2M0 8h1m1 0h3m4 0h3m1 0h2M0 9h1m12 0h2M0 10h14" /><path stroke="silver" d="M2 4h12M1 6h10m1 0h1M1 7h4m4 0h4M1 8h1m10 0h1M1 9h4m4 0h4" /><path stroke="#000" d="M15 4h1m-1 1h1m-1 1h1m-1 1h1M5 8h4m6 0h1m-1 1h1m-2 1h1M1 11h13" /><path stroke="#fff" d="M1 5h12M5 9h4" /><path stroke="red" d="M11 6h1" /></svg>;

export const drvspace3Data = {
  '32x32_4': Drvspace3_32x32_4,
  '16x16_4': Drvspace3_16x16_4
};

export interface Drvspace3Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Drvspace3: React.FC<Drvspace3Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = drvspace3Data[variant];

  return <Svg {...rest} />;
};
