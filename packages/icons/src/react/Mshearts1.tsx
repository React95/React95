import React from 'react';
import type { SVGProps } from "react";

const Mshearts1_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M7 0h1M6 1h3M5 2h5M4 3h7M3 4h9M2 5h3m2 0h1m2 0h3M1 6h4m1 0h2m1 0h5M1 7h13M0 8h15M0 9h15M0 10h15M0 11h15M1 12h4m2 0h1m2 0h4m-8 1h3m-4 1h5" /><path stroke="red" d="M19 1h4m3 0h4M18 2h6m1 0h6M17 3h7m1 0h7M17 4h15M17 5h15M17 6h15M17 7h14M18 8h13M19 9h11m-10 1h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="#ff0" d="M5 5h2m1 0h2M5 6h1m2 0h1" /><path stroke="maroon" d="M2 17h4m3 0h4M1 18h6m1 0h6M0 19h7m1 0h7M0 20h15M0 21h15M0 22h15M1 23h13M1 24h13M2 25h11M3 26h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="purple" d="M19 17h4m3 0h4m-12 1h6m1 0h6m-14 1h7m1 0h7m-15 1h15m-15 1h15m-15 1h15m-14 1h13m-13 1h13m-12 1h11m-10 1h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /></svg>;

export const mshearts1Data = {
  '32x32_4': Mshearts1_32x32_4
};

export interface Mshearts1Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mshearts1: React.FC<Mshearts1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mshearts1Data[variant];

  return <Svg {...rest} />;
};
