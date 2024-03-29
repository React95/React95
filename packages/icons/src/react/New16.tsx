import React from 'react';
import type { SVGProps } from "react";

const New16_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#ff0" d="M0 0h1m3 0h1M1 1h1m5 0h1M2 2h1m1 0h1m1 0h1M1 3h1m1 0h1m0 1h2M4 6h1" /><path stroke="gray" d="M3 0h1m3 0h1M0 1h1m2 0h1m2 0h1M1 2h1m1 0h1m1 0h1M2 3h1m2 0h4M0 4h3m0 1h1m2 0h1M0 6h1m2 0h1M3 7h1" /><path stroke="#000" d="M8 0h3m-1 1h2m-2 1h1m1 0h1m-3 1h1m2 0h1m-4 1h5M7 5h2m5 0h1m-1 1h1M5 7h7m2 0h1M3 8h1m10 0h1M3 9h1m1 0h7m2 0h1M3 10h1m10 0h1M3 11h1m1 0h7m2 0h1M3 12h1m10 0h1M3 13h1m10 0h1M3 14h12" /><path stroke="#fff" d="M4 1h1m3 0h2M7 2h3m1 0h1M4 3h1m4 0h1m1 0h2M3 4h1m2 0h4M2 5h1m1 0h2m3 0h5M5 6h9M4 7h1m7 0h2M4 8h10M4 9h1m7 0h2M4 10h10M4 11h1m7 0h2M4 12h10M4 13h10" /></svg>;

export const new16Data = {
  '16x16_4': New16_16x16_4
};

export interface New16Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const New16: React.FC<New16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = new16Data[variant];

  return <Svg {...rest} />;
};
