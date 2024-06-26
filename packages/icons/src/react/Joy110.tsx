import React from 'react';
import type { SVGProps } from "react";

const Joy110_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M14 1h1m3 0h1m-6 1h1m-1 1h1m-1 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-6 1h1m3 0h2m-7 1h3m2 0h2m1 0h1m-11 1h2m9 0h3M8 14h2m4 0h1m2 0h1m6 0h3M6 15h2m6 0h1m2 0h1m9 0h3M4 16h2m7 0h2m2 0h1m12 0h1M3 17h1m8 0h1m1 0h1m2 0h1m1 0h1m10 0h1M2 18h1m9 0h1m5 0h2m10 0h1M1 19h1m11 0h1m4 0h1m3 0h1m2 0h1m2 0h3M1 20h1m12 0h2m10 0h5M1 21h1m22 0h7M1 22h1m20 0h9M1 23h1m18 0h11M1 24h3m15 0h10M1 25h1m2 0h3m11 0h9M7 26h3m7 0h8m-15 1h3m4 0h6m-10 1h8m-5 1h3" /><path stroke="maroon" d="M15 1h3m-3 1h1m1 0h1m5 15h2m-3 1h1m0 1h2" /><path stroke="#000" d="M14 2h1m3 0h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-6 1h5m-1 1h1m-1 1h1m-1 1h2m-2 1h1m1 0h1m10 0h1m-17 1h3m2 0h1m4 0h1m5 0h1m-13 1h1m11 0h1m-16 1h3m12 0h1m-1 1h1m-1 1h1m-1 1h1m-3 1h3M2 25h2m23 0h2M4 26h3m18 0h2M7 27h3m13 0h2m-15 1h3m8 0h2m-10 1h3m3 0h2m-5 1h3" /><path stroke="red" d="M16 2h1m7 16h1" /><path stroke="silver" d="M15 4h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-5 1h2m5 0h2m-11 1h4m2 0h1m2 0h5M8 15h6m2 0h1m2 0h8M6 16h7m3 0h1m3 0h10M4 17h8m4 0h1m4 0h2m2 0h5M3 18h9m9 0h1m1 0h1m2 0h4M4 19h9m3 0h2m2 0h2m4 0h2M7 20h7m5 0h7M2 21h2m6 0h14M2 22h5m6 0h9M2 23h8m6 0h4M4 24h9m-6 1h9m-6 1h7m-4 1h4" /></svg>;

export const joy110Data = {
  '32x32_4': Joy110_32x32_4
};

export interface Joy110Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Joy110: React.FC<Joy110Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = joy110Data[variant];

  return <Svg {...rest} />;
};
