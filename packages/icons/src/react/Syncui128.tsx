import React from 'react';
import type { SVGProps } from "react";

const Syncui128_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M3 0h10M2 1h1m9 0h1M2 2h1m1 0h7m1 0h1M2 3h1m1 0h1m7 0h1M2 4h1m1 0h1m7 0h1M2 5h1m1 0h1m7 0h1M2 6h1m1 0h1m7 0h1M2 7h1m9 0h1M2 8h11M1 9h1m11 0h1M1 10h2m2 0h1m2 0h1m2 0h1M0 11h2m2 0h1m2 0h1m2 0h1m2 0h2M0 12h1m21 7h1m2 0h1m-5 1h2m2 0h1m-5 1h2m2 0h1m-8 1h3m1 0h2m1 0h5m0 1h1m-1 2h1m-1 2h1m-1 2h1" /><path stroke="silver" d="M3 1h9M3 2h1m7 0h1M3 3h1m7 0h1M3 4h1m7 0h1M3 5h1m7 0h1M3 6h1m7 0h1M3 7h9m-8 3h1m2 0h1m2 0h1m2 0h1M3 11h1m2 0h1m2 0h1m2 0h1M1 12h14m8 8h2m-6 1h1m7 0h4m-14 1h1m0 1h1m7 0h1m1 0h1m-12 1h1m0 1h1m1 0h7m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 2h1" /><path stroke="#000" d="M13 1h1m-1 1h1m-1 1h1M6 4h4m3 0h1M6 5h1m2 0h1m3 0h1M6 6h4m3 0h1m-1 1h1m-1 1h1m0 1h1M3 10h1m2 0h1m2 0h1m2 0h1m1 0h1M2 11h1m2 0h1m2 0h1m2 0h1m3 0h1m-1 1h1M0 13h16m7 6h2m1 0h1m-1 1h1m-1 1h1m4 0h1m-2 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-15 1h14" /><path stroke="#0ff" d="M5 3h6M5 4h1m4 0h1M5 5h1m4 0h1M5 6h1m4 0h1" /><path stroke="#fff" d="M7 5h2M2 9h11m5 12h1m1 0h1m0 1h1m2 0h1m-8 1h1m2 0h6m-9 2h1m-1 2h1m-1 2h1" /><path stroke="#00f" d="M18 10h1m0 1h1m0 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2m-4 1h4M8 16h4m-4 1h2m-2 1h1m1 0h1m-3 1h1m2 0h1m0 1h1m0 1h1" /><path stroke="olive" d="M22 18h4m-5 1h1m-4 1h3m6 0h4m-14 1h1m5 0h2m-9 1h1m-1 1h1m2 0h1m7 0h1m1 0h1m-14 1h1m1 0h13m-15 1h1m2 0h1m7 0h1m1 0h1m-14 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3m-15 1h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-14 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3m-15 1h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-14 1h15" /></svg>;

export const syncui128Data = {
  '32x32_4': Syncui128_32x32_4
};

export interface Syncui128Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Syncui128: React.FC<Syncui128Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = syncui128Data[variant];

  return <Svg {...rest} />;
};
