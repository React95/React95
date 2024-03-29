import React from 'react';
import type { SVGProps } from "react";

const Dialer2_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M8 0h3M7 1h2m2 0h1M6 2h5m1 0h1M5 3h3m3 0h1m1 0h1M4 4h3m2 0h1m2 0h1m1 0h1M4 5h3m1 0h1m1 0h1m1 0h1m1 0h1M4 6h3m2 0h1m2 0h1m1 0h1M5 7h3m3 0h1m1 0h2M6 8h5m1 0h2m1 0h1M7 9h3m1 0h4m1 0h1m-9 1h8m1 0h1m-7 1h6m1 0h2m3 0h2m-15 1h5m1 0h2m1 0h3m1 0h1m1 0h1m-16 1h1m1 0h3m1 0h4m1 0h3m1 0h1m-16 1h1m1 0h3m4 0h1m1 0h2m2 0h1m-16 1h1m1 0h8m1 0h3m1 0h2M9 16h2m1 0h1m6 0h1m2 0h3m1 0h1M8 17h2m13 0h5M7 18h15m1 0h6M6 19h2m2 0h1m2 0h1m2 0h1m3 0h1m1 0h8M5 20h2m2 0h1m2 0h1m2 0h1m3 0h1m1 0h9M4 21h2m2 0h1m2 0h1m2 0h1m3 0h1m1 0h11M3 22h2m2 0h1m2 0h1m2 0h1m3 0h1m1 0h11m1 0h1M2 23h2m10 0h1m1 0h1m1 0h10m1 0h2M1 24h2m12 0h1m1 0h12m1 0h1M0 25h15m1 0h14M0 26h3m1 0h1m1 0h1m8 0h13M0 27h14m1 0h11M0 28h14m1 0h9M0 29h14m1 0h7M0 30h14m1 0h5M0 31h18" /><path stroke="gray" d="M9 1h2M8 3h3m-1 1h2m-1 1h1m-1 1h1m0 1h1m-2 1h1m-2 1h1m4 3h1m8 0h1m-10 2h1m1 0h1m6 0h1m-12 2h1m-6 3h1m2 0h1m2 0h1m2 0h2M7 20h1m2 0h1m2 0h1m2 0h2M6 21h1m2 0h1m2 0h1m2 0h2M5 22h1m2 0h1m2 0h1m2 0h2M4 23h9M3 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M11 2h1m0 1h1M7 4h2m4 0h1M7 5h1m1 0h1m3 0h1M7 6h2m1 0h1m2 0h1M8 7h3m3 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-8 1h1m3 0h1m4 0h1m3 0h1m-14 1h1m4 0h1m1 0h1m1 0h1m2 0h1m-13 1h1m8 0h1m3 0h1m-14 1h1m2 0h5m1 0h2m3 0h1m-16 1h13m-1 1h1M9 19h1m2 0h1m2 0h1m5 0h1M8 20h1m2 0h1m2 0h1m5 0h1M7 21h1m2 0h1m2 0h1m5 0h1M6 22h1m2 0h1m2 0h1m5 0h1m11 0h1m-18 1h1m3 0h1m10 0h1m-13 1h1m12 0h1m-15 1h1M3 26h1m1 0h1m1 0h8m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M19 19h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M4 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 6h1" /></svg>;

export const dialer2Data = {
  '32x32_4': Dialer2_32x32_4
};

export interface Dialer2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Dialer2: React.FC<Dialer2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = dialer2Data[variant];

  return <Svg {...rest} />;
};
