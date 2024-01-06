import React from 'react';
import type { SVGProps } from "react";

const Msrating106_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M16 6h1m-1 1h1m-2 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m-1 1h1m-2 1h1m-1 1h1m-8 1h7m-6 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1" /><path stroke="#ff0" d="M16 8h1m-1 1h1m-2 1h3m-3 1h3m-4 1h5m-5 1h5m-6 1h7M8 15h17M9 16h15m-14 1h13m-12 1h11m-10 1h9m-10 1h5m1 0h5m-11 1h4m3 0h4m-12 1h3m7 0h3m-13 1h2m9 0h2M9 24h1m13 0h1" /><path stroke="#000" d="M18 10h1m-1 1h1m0 1h1m-1 1h1m0 1h7m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-6 1h1m5 0h1m-8 1h1m1 0h1m4 0h1m-10 1h2m3 0h2m3 0h1m-12 1h1m7 0h1m2 0h1m-14 1h2m9 0h2m1 0h1M8 25h2m13 0h2" /></svg>;
const Msrating106_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 3h1M7 4h1m0 1h1m0 1h3M4 7h1m5 0h1M5 8h1m3 0h1M7 9h1m1 0h1m-5 1h2m1 0h3m-7 1h1m5 0h1" /><path stroke="olive" d="M6 5h2M3 6h4M5 9h1m-2 1h1" /><path stroke="#ff0" d="M7 6h2M5 7h5M6 8h3M6 9h1m1 0h1" /></svg>;

export const msrating106Data = {
  '32x32_4': Msrating106_32x32_4,
  '16x16_4': Msrating106_16x16_4
};

export interface Msrating106Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Msrating106: React.FC<Msrating106Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = msrating106Data[variant];

  return <Svg {...rest} />;
};
