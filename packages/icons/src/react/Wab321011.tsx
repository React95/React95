import React from 'react';
import type { SVGProps } from "react";

const Wab321011_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M19 6h1m-3 1h2m1 0h1m-6 1h2m4 0h1M5 9h4m4 0h2m7 0h1M3 10h2m4 0h1m1 0h2m10 0h1M0 11h3m7 0h1m13 0h1M1 12h1m1 0h1m7 0h1m13 0h1M2 13h1m1 0h1m7 0h1m13 0h1M3 14h1m1 0h1m7 0h1m13 0h1M4 15h1m1 0h1m7 0h1m13 0h1M5 16h1m1 0h1m7 0h1m13 0h1M6 17h1m1 0h1m7 0h1m10 0h3M7 18h1m1 0h1m7 0h1m7 0h2m2 0h1M8 19h1m1 0h1m3 0h5m4 0h2m4 0h2M9 20h1m1 0h3m4 0h1m2 0h2m4 0h2m-19 1h11m4 0h2m-11 1h1m1 0h1m4 0h2m-8 1h2m2 0h2m-5 1h3" /><path stroke="#fff" d="M19 7h1m-3 1h4m-6 1h3m2 0h2M5 10h2m6 0h3m2 0h5M3 11h5m4 0h2m2 0h4m2 0h2M4 12h5m4 0h5m2 0h5M5 13h5m4 0h2m2 0h4m2 0h2M6 14h5m4 0h5m2 0h5M7 15h5m4 0h2m2 0h4m2 0h2M8 16h5m4 0h5m2 0h5M9 17h5m4 0h2m2 0h5m-17 1h5m4 0h6m-14 1h3m6 0h3" /><path stroke="gray" d="M18 9h2m-4 1h2m-4 1h2m4 0h2M2 12h1m15 0h2M3 13h1m12 0h2m4 0h2M4 14h1m15 0h2M5 15h1m12 0h2m4 0h2M6 16h1m15 0h2M7 17h1m12 0h2M8 18h1m18 0h2M9 19h1m15 0h2m-17 1h1m3 0h4m5 0h2m-4 1h2m-4 1h2" /><path stroke="silver" d="M7 10h2m-1 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m0 1h1m7 0h2m-10 1h2m4 0h2m-4 1h2m-4 1h2m-4 1h2" /><path stroke="red" d="M17 22h1" /></svg>;
const Wab321011_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M8 3h3M2 4h3m1 0h2m3 0h1M0 5h2m3 0h1m6 0h1M0 6h1m5 0h1m6 0h1M1 7h1m5 0h1m6 0h1M2 8h1m5 0h1m4 0h2M3 9h1m5 0h1m1 0h2m2 0h1M4 10h7m2 0h2m-7 1h1m2 0h2m-4 1h2" /><path stroke="#fff" d="M8 4h3M6 5h6M2 6h2m3 0h6M2 7h3m3 0h6M3 8h3m3 0h4M4 9h3m3 0h1" /><path stroke="silver" d="M2 5h3M1 6h1m2 0h2M5 7h2M6 8h2M7 9h2m4 0h2m-4 1h2m-4 1h2" /></svg>;

export const wab321011Data = {
  '32x32_4': Wab321011_32x32_4,
  '16x16_4': Wab321011_16x16_4
};

export interface Wab321011Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wab321011: React.FC<Wab321011Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wab321011Data[variant];

  return <Svg {...rest} />;
};
