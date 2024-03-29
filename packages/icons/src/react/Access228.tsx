import React from 'react';
import type { SVGProps } from "react";

const Access228_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M11 2h3M9 3h2m3 0h2M7 4h2m7 0h2M4 5h3m5 0h2m4 0h2M4 6h1m5 0h2m8 0h1M3 7h1m15 0h2M3 8h1m13 0h4M2 9h1m12 0h6M2 10h1m10 0h8M2 11h1m10 0h11M1 12h1m11 0h8m3 0h2M1 13h1m11 0h6m2 0h3m2 0h2M1 14h1m11 0h4m3 0h1m3 0h1m3 0h2M2 15h2m9 0h2m5 0h1m3 0h1m5 0h1M4 16h2m3 0h1m1 0h1m1 0h1m7 0h3m5 0h2M6 17h1m6 0h1m13 0h4M8 18h2m2 0h1m4 0h1m7 0h6m-19 1h1m2 0h2m6 0h8m-19 1h3m8 0h8m-19 1h1m1 0h2m7 0h6m-17 1h1m3 0h2m5 0h4M9 23h1m2 0h1m1 0h6m3 0h2M4 24h1m7 0h1m7 0h3m-11 1h1m-1 1h1m1 0h1m-7 1h2m2 0h1m2 0h2m-5 1h1m4 0h1m-7 1h1" /><path stroke="silver" d="M11 3h3M9 4h7M7 5h5m2 0h4M6 6h4m2 0h7M8 7h9M5 8h2m3 0h5M4 9h5m-5 1h8m-8 1h8m-9 1h9m9 0h3M3 13h9m7 0h2m3 0h2M2 14h10m5 0h3m1 0h3m1 0h3M4 15h5m2 0h1m4 0h4m1 0h3m1 0h4M6 16h2m10 0h3m3 0h3m-17 1h2m3 0h2m3 0h5m-15 1h1m3 0h3m1 0h1M9 19h1m4 0h1m2 0h5M9 20h1m5 0h7M4 21h1m11 0h6M4 22h1m4 0h1m8 0h4M4 23h1m15 0h2M9 25h1m-1 1h1m0 2h2" /><path stroke="red" d="M27 3h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-4 1h6m-5 1h4m-3 1h2" /><path stroke="maroon" d="M29 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#fff" d="M5 6h1m13 0h1M4 7h4m9 0h2M4 8h1m2 0h3m5 0h2M3 9h1m5 0h6M3 10h1m8 0h1M3 11h1m8 0h1M2 12h1m9 0h1M2 13h1m9 0h1m-1 1h1m-1 1h1m2 0h1m13 0h1m-18 1h1m1 0h4m9 0h2m-17 1h1m1 0h1m2 0h3m5 0h2m-16 1h1m1 0h1m5 0h6M7 19h1m2 0h2m1 0h1m8 0h1M6 20h1m3 0h2m10 0h1M3 21h1m1 0h1m1 0h1m2 0h2m10 0h1M6 22h1m4 0h1m10 0h1M5 23h1m1 0h1m3 0h1m10 0h1M6 24h1m3 0h2m-5 1h1m2 0h2m-2 1h2m-2 1h2" /><path stroke="#000" d="M21 7h1m-1 1h1m-1 1h1m-1 1h1M9 15h2m-1 1h1m20 0h1M9 17h1m21 0h1m-1 1h1M8 19h1m22 0h1M8 20h1m22 0h1M8 21h2m19 0h2M8 22h1m1 0h1m16 0h2M8 23h1m1 0h1m14 0h2M2 24h1m5 0h2m13 0h2M3 25h2m3 0h1m-4 1h1m2 0h1m-3 1h1m0 1h1m1 0h1m-2 1h1m1 0h1m-2 1h2" /><path stroke="olive" d="M8 16h1m-2 1h1m-2 1h1m-2 1h1m-3 1h2m-3 1h1m-1 1h1m-1 1h1m0 1h1m1 1h1m0 1h1m0 1h1m0 1h1m0 1h1" /><path stroke="#ff0" d="M8 17h1m-2 1h1m-2 1h1m-2 1h1m1 0h1m-2 1h1m-4 1h1m1 0h1m1 0h1m-5 1h1m2 0h1m-2 1h1m1 0h1m-2 1h1m0 1h1" /></svg>;

export const access228Data = {
  '32x32_4': Access228_32x32_4
};

export interface Access228Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access228: React.FC<Access228Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access228Data[variant];

  return <Svg {...rest} />;
};
