import React from 'react';
import type { SVGProps } from "react";

const Mmsys121_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M9 2h15M9 3h1m13 0h1M9 4h1m13 0h2M9 5h1m13 0h1m1 0h1M9 6h1m13 0h1m2 0h1M9 7h1m13 0h1M9 8h1M9 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 2h1m-1 2h1m-1 2h1m-1 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M10 3h13M10 4h13M10 5h13m1 0h1M10 6h13m1 0h2M10 7h13M10 8h17M10 9h17m-17 1h17m-17 1h17m-17 1h2m6 0h9m-17 1h2m6 0h9m-17 1h2m1 0h1m6 0h7m-4 1h4m-17 1h2m1 0h1m1 0h2m1 0h1m1 0h2m1 0h4m-2 1h2m-17 1h2m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1m1 0h2m-2 1h2m-14 1h1m4 0h1m1 0h2m1 0h1m1 0h2m-2 1h2m-17 1h2m3 0h2m3 0h4m1 0h2m-2 1h2m-17 1h17m-17 1h17m-17 1h17m-17 1h17" /><path stroke="#000" d="M24 3h1m0 1h1m0 1h1m0 1h1m-4 1h5m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-17 1h6m10 0h1m-17 1h6m10 0h1m-17 1h1m4 0h1m10 0h1M2 15h21m5 0h1M2 16h1m4 0h1m4 0h1m4 0h1m4 0h1m5 0h1M2 17h21m5 0h1M2 18h1m4 0h1m4 0h1m4 0h1m4 0h1m5 0h1M2 19h21m5 0h1M2 20h1m4 0h1m2 0h3m2 0h3m4 0h1m5 0h1M2 21h21m5 0h1M5 22h3m20 0h1M5 23h2m21 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M9 29h20" /><path stroke="silver" d="M27 8h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-14 1h3m1 0h2m7 0h1m-1 1h1m-14 1h1m4 0h1m7 0h1m-5 1h2m2 0h1m-14 1h1m4 0h1m4 0h1m2 0h1m-5 1h2m2 0h1m-14 1h1m4 0h1m4 0h1m2 0h1m-5 1h2m2 0h1m-16 1h3m2 0h3m4 0h1m2 0h1M7 23h2m1 0h15m2 0h1M7 24h2m18 0h1M7 25h2m18 0h1m-1 1h1m-1 1h1m-18 1h18" /></svg>;
const Mmsys121_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 0h10M2 1h1m9 0h1M2 2h1m10 0h1M2 3h1M2 4h1M2 5h1M2 6h1M2 7h1M2 8h1M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M3 1h8M3 2h8m1 0h1M3 3h3m2 0h3M3 4h3m4 0h3M3 5h3m1 0h1m2 0h3M3 6h3m1 0h2m1 0h3M3 7h3m1 0h2m1 0h3M3 8h2m2 0h2m1 0h3M3 9h1m3 0h2m1 0h3M3 10h1m2 0h2m2 0h3M3 11h4m3 0h3M3 12h4m2 0h4M3 13h10" /><path stroke="silver" d="M11 1h1m-1 1h1m1 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 14h11" /><path stroke="#000" d="M6 3h2m3 0h4M6 4h4m4 0h1M6 5h1m1 0h2m4 0h1M6 6h1m2 0h1m4 0h1M6 7h1m2 0h1m4 0h1M5 8h2m2 0h1m4 0h1M4 9h3m2 0h1m4 0h1M4 10h2m2 0h2m4 0h1m-8 1h3m4 0h1m-8 1h2m5 0h1m-1 1h1m-1 1h1M2 15h13" /></svg>;

export const mmsys121Data = {
  '32x32_4': Mmsys121_32x32_4,
  '16x16_4': Mmsys121_16x16_4
};

export interface Mmsys121Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys121: React.FC<Mmsys121Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mmsys121Data[variant];

  return <Svg {...rest} />;
};
