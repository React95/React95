import React from 'react';
import type { SVGProps } from "react";

const Wmsui322223_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M8 4h6M6 5h2m6 0h2M4 6h2m10 0h3m9 0h4M3 7h1m14 0h2m6 0h2M2 8h1m16 0h1m5 0h1M2 9h1m20 0h2M1 10h1m18 0h3m5 0h4M1 11h1m24 0h2M0 12h1m16 0h1m3 0h1m3 0h1M0 13h1m20 0h1m1 0h2M0 14h1m20 0h2m5 0h4M0 15h1m25 0h2M0 16h1m13 0h1m6 0h1m3 0h1M0 17h1m20 0h1m1 0h2M1 18h1m19 0h2m5 0h4M1 19h1m10 0h1m13 0h2M2 20h1m16 0h1m5 0h1M2 21h1m16 0h1m3 0h2M2 22h2m16 0h3M3 23h3m10 0h2M6 24h2m6 0h2m-8 1h6" /><path stroke="#fff" d="M8 5h6M6 6h10M4 7h14M3 8h16M3 9h14m2 0h1M2 10h14m3 0h1M2 11h13m3 0h2M1 12h13m4 0h3M1 13h12m4 0h4M1 14h5m1 0h5m4 0h5M1 15h4m3 0h3m4 0h6M1 16h3m5 0h1m5 0h6M1 17h2m11 0h7M2 18h2m9 0h7M2 19h3m8 0h7M3 20h3m6 0h7M3 21h4m5 0h7M4 22h4m3 0h7M6 23h3m1 0h6m-8 1h6" /><path stroke="#000" d="M28 7h4M20 8h1m5 0h2M18 9h1m1 0h1m4 0h1m-8 1h1m4 0h2m-8 1h1m3 0h2m5 0h4m-10 1h1m3 0h2m-12 1h1m5 0h1m2 0h1m-11 1h1m7 0h2m-11 1h1m6 0h2m5 0h4m-10 1h1m3 0h2M3 17h1m9 0h1m8 0h1m2 0h1M4 18h1m7 0h1m10 0h2M5 19h1m14 0h3m5 0h4M6 20h1m4 0h1m8 0h2m4 0h2M7 21h1m3 0h1m8 0h1m4 0h1M8 22h1m1 0h1m7 0h2m3 0h2M9 23h1m8 0h1m1 0h3M4 24h2m10 0h2M6 25h2m6 0h2m-8 1h6" /><path stroke="green" d="M17 9h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-8 1h1m5 0h1m-8 1h1m1 0h1m3 0h1m-8 1h1m3 0h1m1 0h1m-2 1h1" /><path stroke="#0f0" d="M17 10h1m-2 1h1m-2 1h2m-3 1h2m-3 1h2m-9 1h1m5 0h2m-9 1h3m3 0h3M4 17h5m1 0h3m-8 1h7m-6 1h6m-5 1h4m-3 1h3m-2 1h1" /><path stroke="silver" d="M20 11h1m-1 7h1" /></svg>;
const Wmsui322223_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 2h4M2 3h1m4 0h1M1 4h1M0 5h1m8 0h1M0 6h1m8 0h1M0 7h1m8 0h1M0 8h1m4 0h1m3 0h1M1 9h1m6 0h1m1 0h1m-9 1h1m4 0h1m-5 1h4" /><path stroke="silver" d="M7 2h1m0 2h1M7 5h1M2 6h1m3 1h1M2 8h1M0 9h1m2 0h1m5 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M15 2h1m-3 1h2M9 4h1m1 0h2m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1M9 9h1m3 0h2M1 10h1m6 0h1m2 0h2M2 11h1m4 0h1m-5 1h4" /><path stroke="#fff" d="M3 3h4M2 4h5M1 5h5m2 0h1M1 6h1m2 0h1m2 0h2M1 7h1m5 0h2M1 8h1m4 0h3M2 9h1m2 0h3m-5 1h4" /><path stroke="green" d="M8 3h1M7 4h1M6 5h1M3 6h1m1 0h2M2 7h4M3 8h2M4 9h1" /></svg>;

export const wmsui322223Data = {
  '32x32_4': Wmsui322223_32x32_4,
  '16x16_4': Wmsui322223_16x16_4
};

export interface Wmsui322223Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wmsui322223: React.FC<Wmsui322223Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wmsui322223Data[variant];

  return <Svg {...rest} />;
};
