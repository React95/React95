import React from 'react';
import type { SVGProps } from "react";

const Quikview2_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 2h5M9 3h2m5 0h2M8 4h2m7 0h2M8 5h1m9 0h1M7 6h1m11 0h1m10 0h1M7 7h1m11 0h1m10 0h1M7 8h1m11 0h1m10 0h1M7 9h1m11 0h1m10 0h1M7 10h1m11 0h1m10 0h1m-1 1h1m-12 1h1m10 0h1m-20 1h5m2 0h1m11 0h1m-15 1h2m12 0h1m-21 1h6m14 0h1M9 16h1m19 0h1M8 17h1m19 0h1M7 18h21M6 19h1m-2 1h1m-2 1h1m-4 1h3" /><path stroke="gray" d="M4 5h4m1 0h9m1 0h10M3 6h1m25 0h1M2 7h1m25 0h2M1 8h1m25 0h3M1 9h1m25 0h3M1 10h1m25 0h3M1 11h1m5 0h2m10 0h1m7 0h3M1 12h1m6 0h11m8 0h3M1 13h1m2 0h3m3 0h1m5 0h2m1 0h5m3 0h3M1 14h1m9 0h5m11 0h3M1 15h1m25 0h3M1 16h1m25 0h2M1 17h2m6 0h19" /><path stroke="silver" d="M4 6h3m1 0h11m1 0h9M3 7h4m1 0h11m1 0h8M3 9h4m1 0h11m1 0h7M3 10h4m1 0h11m1 0h2m2 0h3M3 11h4m2 0h10m1 0h2m2 0h3M3 12h5m12 0h7M3 13h1m3 0h1m16 0h3M3 14h1m2 0h1m17 0h3M3 15h3m12 0h9M3 16h2m5 0h17M3 17h1m-2 1h1m-2 1h1" /><path stroke="#fff" d="M2 8h5m1 0h11m1 0h7M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h2m12 0h6M2 15h1m13 0h2M2 16h1" /><path stroke="red" d="M22 10h2m-2 1h2" /><path stroke="olive" d="M8 13h2m-3 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-5 1h4m-4 1h3" /></svg>;

export const quikview2Data = {
  '32x32_4': Quikview2_32x32_4
};

export interface Quikview2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Quikview2: React.FC<Quikview2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = quikview2Data[variant];

  return <Svg {...rest} />;
};
