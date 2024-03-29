import React from 'react';
import type { SVGProps } from "react";

const Print2_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M5 1h9M4 2h1m8 0h1M4 3h1m1 0h5m1 0h1M3 4h1m8 0h1M3 5h1m1 0h5m1 0h4M2 6h1m8 0h1m1 0h1m1 0h1M1 7h10m1 0h1m1 0h2M0 8h1m10 0h1m1 0h1m1 0h1M0 9h13m2 0h1M0 10h1m11 0h1m1 0h1M0 11h1m11 0h3M0 12h13m1 0h1M1 13h1m9 0h1m1 0h1M2 14h11" /><path stroke="#fff" d="M5 2h8M5 3h1m5 0h1M4 4h8M4 5h1m5 0h1M3 6h8" /><path stroke="gray" d="M7 10h3" /><path stroke="#ff0" d="M7 11h3" /></svg>;

export const print2Data = {
  '16x16_4': Print2_16x16_4
};

export interface Print2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Print2: React.FC<Print2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = print2Data[variant];

  return <Svg {...rest} />;
};
