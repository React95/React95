import React from 'react';
import type { SVGProps } from "react";

const Wmsui322225_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M8 4h6M6 5h2m6 0h2M4 6h2m10 0h3m9 0h4M3 7h1m14 0h2m6 0h2M2 8h1m16 0h1m5 0h1M2 9h1m20 0h2M1 10h1m18 0h3m5 0h4M1 11h1m24 0h2M0 12h1m20 0h1m3 0h1M0 13h1m20 0h1m1 0h2M0 14h1m20 0h2m5 0h4M0 15h1m25 0h2M0 16h1m20 0h1m3 0h1M0 17h1m20 0h1m1 0h2M1 18h1m19 0h2m5 0h4M1 19h1m24 0h2M2 20h1m16 0h1m5 0h1M2 21h1m16 0h1m3 0h2M2 22h2m16 0h3M3 23h3m10 0h2M6 24h2m6 0h2m-8 1h6" /><path stroke="#fff" d="M8 5h6M6 6h10M4 7h7m1 0h6M3 8h8m2 0h6M3 9h8m3 0h6M2 10h9m4 0h5M2 11h9m5 0h4M1 12h2m14 0h4M1 13h2m15 0h3M1 14h2m16 0h2M1 15h2m16 0h2M1 16h2m15 0h3M1 17h2m14 0h4M2 18h9m5 0h4M2 19h9m4 0h5M3 20h8m3 0h5M3 21h8m2 0h6M4 22h7m1 0h6M6 23h10m-8 1h6" /><path stroke="green" d="M11 7h1m-1 1h2m-2 1h1m1 0h1m-3 1h1m2 0h1m-4 1h1m3 0h1M3 12h9m4 0h1M3 13h1m13 0h1M3 14h1m14 0h1M3 15h1m-1 1h1" /><path stroke="#000" d="M28 7h4M20 8h1m5 0h2m-8 1h1m4 0h1m-3 1h2m-4 1h2m5 0h4m-10 1h1m3 0h2m-6 1h1m2 0h1m-3 1h2m-7 1h1m2 0h2m5 0h4m-15 1h1m4 0h1m3 0h2M3 17h9m4 0h1m5 0h1m2 0h1m-15 1h1m3 0h1m7 0h2m-14 1h1m2 0h1m5 0h3m5 0h4m-21 1h1m1 0h1m6 0h2m4 0h2m-17 1h2m7 0h1m4 0h1m-15 1h1m6 0h2m3 0h2m-7 1h1m1 0h3M4 24h2m10 0h2M6 25h2m6 0h2m-8 1h6" /><path stroke="#0f0" d="M12 9h1m-1 1h2m-2 1h3m-3 1h4M4 13h13M4 14h14M4 15h14M4 16h13m-5 1h4m-4 1h3m-3 1h2m-2 1h1" /><path stroke="silver" d="M20 11h1m-1 7h1" /></svg>;
const Wmsui322225_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 2h4M2 3h1m4 0h1M1 4h1m6 0h1M0 5h1m8 0h1M0 6h1m8 0h1M0 7h1m8 0h1M0 8h1m8 0h1M1 9h1m6 0h1m1 0h1m-9 1h1m4 0h1m-5 1h4" /><path stroke="silver" d="M7 2h1M0 9h1m8 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M15 2h1M8 3h1m4 0h2M9 4h1m1 0h2m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1m-6 1h1m2 0h2m-5 1h3m2 0h1M9 9h1m3 0h2M1 10h1m6 0h1m2 0h2M2 11h1m4 0h1m-5 1h4" /><path stroke="#fff" d="M3 3h4M2 4h3m1 0h2M1 5h4m2 0h2M1 6h1m6 0h1M1 7h1m6 0h1M1 8h4m2 0h2M2 9h3m1 0h2m-5 1h4" /><path stroke="green" d="M5 4h1M5 5h2M2 6h6M2 7h6M5 8h2M5 9h1" /></svg>;

export const wmsui322225Data = {
  '32x32_4': Wmsui322225_32x32_4,
  '16x16_4': Wmsui322225_16x16_4
};

export interface Wmsui322225Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Wmsui322225: React.FC<Wmsui322225Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wmsui322225Data[variant];

  return <Svg {...rest} />;
};
