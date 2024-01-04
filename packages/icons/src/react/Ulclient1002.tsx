import React from 'react';
import type { SVGProps } from "react";

const Ulclient1002_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M8 8h9M6 9h13M5 10h15M4 11h16M4 12h11m3 0h2M3 13h11m4 0h1M3 14h10m4 0h1M3 15h9m3 0h3M3 16h7m8 0h1M3 17h6m9 0h1M3 18h6m10 0h1M3 19h7m7 0h2M4 20h7m6 0h1M4 21h6m7 0h1M5 22h4m8 0h1M6 23h3m3 0h5M6 24h1m7 0h1m-1 1h1" /><path stroke="#fff" d="M15 12h2m-3 1h3m-4 1h4m-5 1h3m-5 1h5m1 0h1m-8 1h8m-8 1h8m-7 1h6m-5 1h5m-6 1h6m-7 1h2m-2 1h3m-5 1h6m-5 1h5m-3 1h3m-1 1h1" /><path stroke="silver" d="M17 12h1m-1 1h1m-1 3h1m-1 1h1m-1 1h2m-3 1h1m-1 1h1m-1 1h1m-6 1h6" /><path stroke="#00f" d="M15 16h1M6 26h2m-3 1h5m5 0h1m-9 1h5m2 0h2" /><path stroke="gray" d="M13 24h1m-1 1h1m-1 1h2m-2 1h1" /><path stroke="navy" d="M5 25h3m-3 1h1m2 0h2m5 0h1M4 27h1m5 0h2m2 0h1m1 0h1M4 28h3m5 0h2m2 0h2M7 29h9" /></svg>;
const Ulclient1002_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M2 1h7M1 2h10M1 3h10M0 4h8m2 0h1M0 5h6m3 0h1M0 6h5m4 0h1M0 7h4m6 0h1M0 8h4m5 0h1M0 9h5m4 0h1m-9 1h3m5 0h1m-8 1h2m2 0h3m-7 1h1m4 0h1m-7 1h3m4 0h1m-9 1h1m3 0h2m1 0h1m1 0h1m-4 1h2" /><path stroke="silver" d="M8 4h1M7 5h1M6 6h1M5 7h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1M5 9h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1" /><path stroke="#fff" d="M9 4h1M6 5h1m1 0h1M5 6h1m1 0h1M4 7h1m1 0h1m1 0h1M5 8h1m1 0h1M6 9h1m1 0h1m-4 1h1m1 0h1m-4 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1" /><path stroke="navy" d="M8 6h1" /><path stroke="#00f" d="M1 14h3m4 0h1m-9 1h6m2 0h2" /></svg>;

export const ulclient1002Data = {
  '32x32_4': Ulclient1002_32x32_4,
  '16x16_4': Ulclient1002_16x16_4
};

export interface Ulclient1002Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Ulclient1002: React.FC<Ulclient1002Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = ulclient1002Data[variant];

  return <Svg {...rest} />;
};
