import React from 'react';
import type { SVGProps } from "react";

const Access218_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M7 0h6M7 1h1M2 3h1m7 0h1m6 0h2M1 4h1m15 0h1M0 5h1m2 1h1m13 0h1M6 9h1m7 0h1m4 5h3m-5 1h2m3 0h2m-9 1h2m7 0h2M6 17h1m5 0h3m11 0h3m-17 1h1m15 0h1m-18 1h1m15 0h2m-18 1h1m13 0h4m-19 1h1m12 0h7m-20 1h1m10 0h9m-20 1h1m10 0h9M9 24h1m11 0h10M9 25h1m11 0h10M9 26h1m11 0h10m-21 1h2m9 0h8m-17 1h2m7 0h6m-13 1h2m5 0h4m-9 1h2m3 0h2m-5 1h3" /><path stroke="#000" d="M13 0h1M9 1h1m1 0h1m1 0h1M8 2h5M3 3h1m5 0h1m1 0h1M3 4h1m15 0h1M3 5h2m11 0h2m2 0h1M0 6h3m15 0h3M2 7h1m5 0h5m4 0h2M6 8h2m5 0h2m3 0h1M5 9h1m12 0h1M5 10h1m13 0h1M4 11h1m14 0h1M4 12h1m14 0h1M4 13h1m14 0h1M4 14h1m-1 1h1m0 1h1m-1 1h1m23 1h1m-1 1h1M4 20h1m24 0h1M5 21h2m23 0h1M7 22h3m20 0h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-3 1h2m-4 1h2m-4 1h2m-4 1h2m-4 1h2" /><path stroke="#fff" d="M8 1h1m1 0h1m1 0h1M2 4h1m15 0h1M1 5h1m17 0h1M9 8h3M7 9h3m1 0h3m-8 1h4m1 0h4m-9 1h4m1 0h4M5 12h5m1 0h5M5 13h5m1 0h5M5 14h5m1 0h5M6 15h9m-9 1h9m-8 1h5m-3 1h3m1 0h1m13 0h1m-16 1h4m9 0h2m-15 1h1m2 0h3m5 0h2m-14 1h1m5 0h6m-12 1h1m8 0h1m-10 1h1m8 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="maroon" d="M7 4h7M5 5h2m7 0h2M4 6h1m3 0h5m3 0h1M3 7h1m2 0h2m5 0h2M2 8h1m2 0h1m9 0h1m1 0h1M2 9h1m1 0h1m10 0h1M1 10h1m2 0h1m10 0h1m2 0h1M1 11h1m1 0h1m12 0h1m1 0h1M1 12h1m1 0h1m12 0h1m1 0h1M1 13h1m1 0h1m12 0h1m1 0h1M1 14h1m1 0h1m12 0h1m1 0h1M1 15h1m1 0h1m12 0h1M1 16h1m2 0h1m-3 1h1m1 0h1m-3 1h1m3 0h2m-5 1h1m4 0h3m-6 1h1m1 1h3" /><path stroke="silver" d="M2 5h1m15 0h1M8 8h1m3 0h1m-8 3h1m9 0h1M5 15h1m9 0h1m3 0h3m-5 1h7m-9 1h11M8 18h1m5 0h13m-11 1h9m-12 1h2m3 0h5m-11 1h5m-5 1h8m-8 1h8m-9 1h9m-9 1h9m-10 1h10m-8 1h8m-6 1h6m-4 1h4m-2 1h2" /><path stroke="red" d="M7 5h7M5 6h3m5 0h3M4 7h2m9 0h2M3 8h2m11 0h1M3 9h1m12 0h2M2 10h2m12 0h2M2 11h1m14 0h1M2 12h1m14 0h1M2 13h1m14 0h1M2 14h1m14 0h1M2 15h1m-1 1h2m-1 1h1m-1 1h3m-2 1h4m-2 1h5" /><path stroke="#00f" d="M10 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;

export const access218Data = {
  '32x32_4': Access218_32x32_4
};

export interface Access218Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access218: React.FC<Access218Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access218Data[variant];

  return <Svg {...rest} />;
};
