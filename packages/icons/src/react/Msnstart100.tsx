import React from 'react';
import type { SVGProps } from "react";

const Msnstart100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M14 0h2m-3 1h1m2 0h3m-7 1h1m2 0h1m3 0h2M11 3h1m2 0h1m6 0h2M10 4h1m2 0h1m9 0h2M9 5h1m2 0h1m12 0h2M8 6h1m2 0h1m15 0h2M7 7h1m2 0h1m18 0h2M6 8h1m2 0h1m21 0h1M5 9h1m2 0h1m21 0h2M4 10h1m2 0h1m21 0h2M3 11h1m2 0h1m21 0h1m1 0h1M2 12h1m2 0h1m21 0h1m2 0h1M1 13h1m2 0h1m21 0h1m1 0h3M0 14h2m1 0h1m21 0h1m1 0h2m1 0h1M0 15h1m1 0h2m20 0h1m2 0h1m2 0h1M0 16h1m1 0h4m17 0h1m6 0h1M0 17h1m1 0h1m2 0h3m14 0h1m2 0h2m3 0h2M0 18h1m1 0h1m4 0h3m11 0h1m2 0h2m3 0h1m1 0h1M0 19h1m1 0h1m6 0h3m8 0h1m3 0h1m3 0h1m1 0h1M0 20h1m1 0h1m8 0h3m5 0h1m7 0h1m1 0h1M0 21h1m1 0h1m10 0h3m2 0h1m3 0h2m2 0h1m1 0h1M0 22h1m2 0h2m10 0h3m3 0h2m2 0h1m1 0h1M1 23h2m2 0h2m14 0h1m2 0h1m1 0h1M3 24h2m2 0h2m14 0h1m1 0h1M5 25h2m2 0h2m8 0h2m1 0h1m1 0h1M7 26h2m2 0h2m5 0h2m1 0h1m1 0h1M9 27h2m2 0h2m3 0h1m1 0h1m1 0h1m-12 1h2m2 0h2m2 0h1m1 0h1m-9 1h2m2 0h2m1 0h1m-6 1h2m2 0h1m-3 1h2" /><path stroke="red" d="M14 1h2m-3 1h2m1 0h3m-7 1h2m1 0h6M11 4h2m1 0h9M10 5h2m1 0h12M9 6h2m1 0h15M8 7h2m1 0h18M7 8h2m1 0h21M6 9h2m1 0h21M5 10h2m1 0h21M4 11h2m1 0h21M3 12h2m1 0h21M2 13h2m1 0h21M2 14h1m1 0h21M4 15h20M6 16h17M8 17h14m-12 1h11m-9 1h8m-6 1h5m-3 1h2M2 22h1m0 1h2m0 1h2m0 1h2m0 1h2m0 1h2m0 1h2m0 1h2m0 1h1" /><path stroke="silver" d="M29 11h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="gray" d="M29 12h1m-1 2h1m-4 1h1m1 0h2m-5 1h5M3 17h2m19 0h1m2 0h3M3 18h4m16 0h1m2 0h3M3 19h6m13 0h2m1 0h3M3 20h8m10 0h6M3 21h10m7 0h2m2 0h2M5 22h10m4 0h2m2 0h2M7 23h10m1 0h3m1 0h2M9 24h14m-12 1h8m2 0h1m-9 1h5m2 0h1m-6 1h3m1 0h1m-3 1h2" /><path stroke="maroon" d="M1 15h1m-1 1h1m-1 1h1m-1 1h1m28 0h1M1 19h1m27 0h1M1 20h1m26 0h1M1 21h1m25 0h1M1 22h1m24 0h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /></svg>;

export const msnstart100Data = {
  '32x32_4': Msnstart100_32x32_4
};

export interface Msnstart100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Msnstart100: React.FC<Msnstart100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = msnstart100Data[variant];

  return <Svg {...rest} />;
};
