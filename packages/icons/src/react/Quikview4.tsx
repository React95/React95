import React from 'react';
import type { SVGProps } from "react";

const Quikview4_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M4 5h25M3 6h1m25 0h1M2 7h1m25 0h2M1 8h1m25 0h3M1 9h1m25 0h3M1 10h1m26 0h2M1 11h1m26 0h2M1 12h1m7 0h7m1 0h1m9 0h1m1 0h1M1 13h1m2 0h5m9 0h6m3 0h1m1 0h1M1 14h1m25 0h1m1 0h1M1 15h1m25 0h1m1 0h1M1 16h1m25 0h1M1 17h28m-12 1h1m9 0h1m-9 1h1m5 0h2m-7 1h5" /><path stroke="silver" d="M4 6h25M3 7h25M3 9h15m2 0h5M3 10h14m2 0h3m2 0h2M3 11h14m1 0h4m2 0h3M3 12h6m9 0h9M3 13h1m20 0h3M3 14h1m20 0h3M3 15h6m9 0h9M3 16h13m1 0h10m-11 3h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M30 6h1m-1 1h1M20 8h5m5 0h1M18 9h2m5 0h2m3 0h1m-14 1h2m7 0h2m2 0h1m-14 1h1m9 0h1m2 0h1m-15 1h1m11 0h1m1 0h1M9 13h9m10 0h1m1 0h1M9 14h9m10 0h1m1 0h1m-15 1h1m11 0h1m1 0h1m-15 1h1m11 0h2M2 18h15m1 0h9m1 0h1m-2 1h1m-3 1h2m-8 1h6m-7 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 1h3" /><path stroke="#fff" d="M2 8h18m5 0h2M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h5m9 0h6M2 15h1m6 0h7m1 0h1M2 16h1" /><path stroke="red" d="M22 10h2m-2 1h2" /><path stroke="olive" d="M17 19h2m-3 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-4 1h3" /></svg>;

export const quikview4Data = {
  '32x32_4': Quikview4_32x32_4
};

export interface Quikview4Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Quikview4: React.FC<Quikview4Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = quikview4Data[variant];

  return <Svg {...rest} />;
};
