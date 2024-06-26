import React from 'react';
import type { SVGProps } from "react";

const Quikview1_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M4 5h25M3 6h1m25 0h1M2 7h1m25 0h2M1 8h1m25 0h3M1 9h1m25 0h3M1 10h1m25 0h3M1 11h1m25 0h3M1 12h1m25 0h3M1 13h1m2 0h5m1 0h8m4 0h2m3 0h3M1 14h1m16 0h3m6 0h3M1 15h1m25 0h3M1 16h1m25 0h2M1 17h8m13 0h6M9 18h13m-12 1h1m9 0h1m-9 1h1m5 0h2m-7 1h5" /><path stroke="silver" d="M4 6h25M3 7h25M3 9h10m5 0h9M3 10h8m2 0h5m2 0h2m2 0h3M3 11h7m2 0h7m2 0h1m2 0h3M3 12h7m1 0h9m1 0h6M3 13h1m14 0h3m3 0h3M3 14h1m20 0h3M3 15h6m13 0h5M3 16h6m9 0h3m1 0h5m-17 1h11M9 20h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M30 6h1m-1 1h1m-1 1h1M13 9h5m12 0h1m-20 1h2m5 0h2m10 0h1m-21 1h2m7 0h2m9 0h1m-21 1h1m9 0h1m9 0h1M9 13h1m11 0h1m8 0h1M9 14h9m3 0h1m8 0h1M9 15h9m3 0h1m8 0h1M9 16h1m11 0h1m7 0h1M9 17h1m11 0h1m6 0h1M2 18h7m13 0h6m-7 1h1m-2 1h1m-3 1h2m-8 1h6m-7 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 1h3" /><path stroke="#fff" d="M2 8h25M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h5m13 0h2M2 15h1m15 0h3M2 16h1m7 0h8" /><path stroke="red" d="M22 10h2m-2 1h2" /><path stroke="olive" d="M10 20h2m-3 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-4 1h3" /></svg>;

export const quikview1Data = {
  '32x32_4': Quikview1_32x32_4
};

export interface Quikview1Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Quikview1: React.FC<Quikview1Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = quikview1Data[variant];

  return <Svg {...rest} />;
};
