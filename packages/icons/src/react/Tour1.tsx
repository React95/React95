import React from 'react';
import type { SVGProps } from "react";

const Tour1_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M14 0h18M3 1h2m7 0h2m9 0h1m3 0h1M2 2h1m2 0h2m3 0h2m11 0h1m3 0h1M1 3h9m2 0h3m8 0h1m3 0h1M2 4h2m5 0h3m1 0h1m1 0h1m5 0h3m3 0h1M4 5h10m1 0h1m3 0h2m1 0h2m3 0h1M6 6h2m5 0h2m2 0h2m3 0h1m3 0h1M8 7h6m2 0h1m6 0h4M10 8h3m2 0h1m1 0h2m8 0h3M12 9h9m9 0h2m-18 1h2m5 0h3m-8 1h5m3 0h1m-7 1h3m3 0h1M0 13h21m3 0h1M0 14h24M0 15h24M0 16h24M0 17h24M0 18h24M0 19h24M0 20h24M0 21h24m6 0h2M0 22h24m4 0h2M0 23h28M0 24h24m3 0h1M0 25h14m9 0h1m3 0h1M0 26h12m11 0h1m3 0h1M0 27h11m2 0h2m8 0h1m3 0h1M0 28h14m6 0h4m3 0h1M7 29h2m10 0h1m2 0h1m3 0h1M9 30h2m7 0h1m4 0h9m-21 1h7" /><path stroke="#fff" d="M14 1h9M3 2h2m10 0h7m-6 1h4M4 4h5m3 0h1m1 0h1m1 0h2m-4 1h1m1 0h1M8 6h5m2 0h1m-2 1h1m1 1h1m-1 2h5m1 1h1m-2 1h1m1 0h1m-2 1h1m-9 12h9m-11 1h8m-9 1h2m3 0h3m-4 1h3m-4 1h3" /><path stroke="#0ff" d="M24 1h1m3 0h4m-8 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-6 1h1m3 0h1m-1 1h1m2 15h2m-4 1h2m-6 1h3m1 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-6 1h1m3 0h1" /><path stroke="#00bfbf" d="M25 1h2m-2 1h2m2 0h3m-7 1h2m2 0h3m-7 1h2m2 0h3m-7 1h2m2 0h3m-8 1h2m2 0h4m-4 1h4m-2 1h2m-2 15h2m-3 1h3m-7 1h2m2 0h3m-7 1h2m2 0h3m-7 1h2m2 0h3m-7 1h2m2 0h3m-8 1h2m2 0h4" /><path stroke="silver" d="M12 2h3m7 0h1M10 3h2m3 0h1m4 0h1m-3 1h1m-2 1h1m-2 1h1m-2 1h1m-3 1h2m5 18h3m-8 1h1m3 0h1m-6 1h1m3 0h1M9 29h5m3 0h1m-7 1h6" /><path stroke="gray" d="M21 3h2m-4 1h2m-3 1h1m1 22h3m-4 1h1m-2 1h1m-2 1h1" /><path stroke="#ff0" d="M21 11h1m1 0h1m-2 1h1m-2 1h1m1 0h1" /></svg>;

export const tour1Data = {
  '32x32_4': Tour1_32x32_4
};

export interface Tour1Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Tour1: React.FC<Tour1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = tour1Data[variant];

  return <Svg {...rest} />;
};
