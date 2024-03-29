import React from 'react';
import type { SVGProps } from "react";

const Access221_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="maroon" d="M17 2h5m-7 1h2m2 0h5M14 4h1m6 0h2M13 5h1m8 0h2M13 6h2m9 0h1M15 7h2m7 0h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-4 1h1m0 1h1m0 1h1m0 1h1m0 1h1" /><path stroke="red" d="M17 3h2m-4 1h6m2 0h1M14 5h8m2 0h1M15 6h4m6 0h1m-9 1h1m7 0h2m-1 1h2m-2 1h2m-1 1h2m-2 1h2m-2 1h2m-5 1h8m-7 1h6m-5 1h4m-3 1h2" /><path stroke="#000" d="M24 4h1m0 1h1m-7 1h5m2 0h1m-9 1h1m8 0h1M17 8h1m10 0h1m-1 1h1m0 1h1m-1 1h1m-10 1h1m8 0h1m-10 1h1m-1 1h1m10 0h1m-12 1h1m9 0h1m-2 1h1m-2 1h1m1 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-3 1h2m-4 1h2m-4 1h2m-4 1h2" /><path stroke="gray" d="M10 7h3M8 8h2m3 0h2M6 9h2m7 0h2M3 10h3m5 0h2m4 0h2M3 11h1m5 0h2m8 0h1M2 12h1m15 0h2M2 13h1m13 0h4M1 14h1m12 0h6M1 15h1m10 0h8M1 16h1m10 0h11M0 17h1m11 0h8m3 0h2M0 18h1m11 0h6m2 0h3m2 0h2M0 19h1m11 0h4m3 0h1m3 0h1m3 0h2M1 20h2m9 0h2m5 0h1m3 0h1m5 0h1M3 21h2m7 0h1m7 0h3m5 0h2M5 22h2m5 0h1m13 0h4M7 23h2m15 0h6M9 24h2m11 0h8m-19 1h2m9 0h8m-17 1h2m7 0h6m-13 1h2m5 0h4m-9 1h2m3 0h2m-5 1h3" /><path stroke="silver" d="M10 8h3M8 9h7m-9 1h5m2 0h4M5 11h4m2 0h7M7 12h9M4 13h2m3 0h5M3 14h5m-5 1h8m-8 1h8m-9 1h9m9 0h3M2 18h9m7 0h2m3 0h2M1 19h10m5 0h3m1 0h3m1 0h3M3 20h8m4 0h4m1 0h3m1 0h4M5 21h6m6 0h3m3 0h3M7 22h4m3 0h2m3 0h5M9 23h2m2 0h5m-5 1h8m-8 1h8m-6 1h6m-4 1h4m-2 1h2" /><path stroke="#fff" d="M4 11h1m13 0h1M3 12h4m9 0h2M3 13h1m2 0h3m5 0h2M2 14h1m5 0h6M2 15h1m8 0h1M2 16h1m8 0h1M1 17h1m9 0h1M1 18h1m9 0h1m-1 1h1m-1 1h1m2 0h1m13 0h1m-18 1h1m1 0h4m9 0h2m-17 1h1m1 0h1m2 0h3m5 0h2m-15 1h2m5 0h6m-13 1h2m8 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;

export const access221Data = {
  '32x32_4': Access221_32x32_4
};

export interface Access221Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access221: React.FC<Access221Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access221Data[variant];

  return <Svg {...rest} />;
};
