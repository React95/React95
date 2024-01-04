import React from 'react';
import type { SVGProps } from "react";

const Shell328_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M3 13h28M2 14h1m27 0h1M1 15h1m27 0h2M0 16h1m27 0h3M0 17h1m27 0h3M0 18h1m8 0h15m4 0h3M0 19h1m6 0h2m15 0h2m2 0h3M0 20h1m6 0h2m15 0h2m2 0h3M0 21h1m27 0h3M0 22h1m27 0h3M0 23h1m27 0h3M0 24h1m6 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h3M0 25h1m27 0h3M0 26h1m27 0h2M0 27h29" /><path stroke="silver" d="M3 14h27M2 15h27M2 17h26M2 18h7m15 0h4M2 19h1m2 0h2m19 0h2M2 20h1m2 0h2m19 0h2M2 21h5m19 0h2M2 22h7m15 0h4M2 23h26M2 24h5m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M2 25h5m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M2 26h26" /><path stroke="#000" d="M31 14h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M9 19h15m7 0h1M9 20h15m7 0h1M9 21h15m7 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M1 28h28" /><path stroke="#fff" d="M1 16h27M1 17h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m5 0h2m15 0h2M1 22h1m7 0h15M1 23h1m-1 1h1m-1 1h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 26h1" /><path stroke="red" d="M3 19h2m-2 1h2" /></svg>;
const Shell328_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M2 4h13M1 5h1m12 0h1M0 6h1m12 0h2M0 7h1m12 0h2M0 8h1m3 0h1m6 0h1m1 0h2M0 9h1m12 0h2M0 10h1m12 0h2M0 11h1m12 0h2M0 12h1m1 0h12" /><path stroke="silver" d="M2 5h12M2 7h11M3 8h1m8 0h1M2 9h2m8 0h1M2 10h3m6 0h2M2 11h11" /><path stroke="#000" d="M15 5h1m-1 1h1m-1 1h1M5 8h6m4 0h1M5 9h6m4 0h1m-1 1h1m-1 1h1m-2 1h1M1 13h13" /><path stroke="#fff" d="M1 6h12M1 7h1M1 8h1M1 9h1m2 0h1m6 0h1M1 10h1m3 0h6M1 11h1m-1 1h1" /><path stroke="red" d="M2 8h1" /></svg>;

export const shell328Data = {
  '32x32_4': Shell328_32x32_4,
  '16x16_4': Shell328_16x16_4
};

export interface Shell328Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell328: React.FC<Shell328Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shell328Data[variant];

  return <Svg {...rest} />;
};
