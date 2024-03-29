import React from 'react';
import type { SVGProps } from "react";

const Main105_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M8 1h6M8 2h1M3 4h1m7 0h1m6 0h2M2 5h1m15 0h1M1 6h1m2 1h1m13 0h1M7 10h1m7 0h1m-9 8h1m7 0h1m4 1h1m-1 1h1m-2 1h1m1 0h1m-5 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m3 0h1m-7 1h1m1 0h1m3 0h1m-8 1h1m1 0h1m5 0h1m-9 1h1m-2 1h1m1 0h1m-3 1h1m1 0h1m7 0h1m-12 1h1m1 0h1m8 0h1m-14 1h1m10 0h1m-12 1h1m10 0h1" /><path stroke="#000" d="M14 1h1m-5 1h1m1 0h1m1 0h1M9 3h5M4 4h1m5 0h1m1 0h1M4 5h1m15 0h1M4 6h2m11 0h2m2 0h1M1 7h3m15 0h3M3 8h1m5 0h5m4 0h2M7 9h2m5 0h2m3 0h1M6 10h1m12 0h1M6 11h1m13 0h1M5 12h1m14 0h1M5 13h1m14 0h1M5 14h1m14 0h1M5 15h1m14 0h1m1 0h1M5 16h1m14 0h1m2 0h1M6 17h1m16 0h1M6 18h1m12 0h1m4 0h1m-1 1h1m-7 1h1m6 0h1M5 21h1m11 0h1m7 0h1M6 22h2m7 0h2m9 0h1M8 23h7m11 0h1m0 1h1m-1 1h1m0 1h1m-12 1h7m4 0h1m0 1h1m-1 1h1m-12 1h1m12 0h1m-20 1h7m4 0h9" /><path stroke="#fff" d="M9 2h1m1 0h1m1 0h1M3 5h1m15 0h1M2 6h1m17 0h1M10 9h3m-5 1h3m1 0h3m-8 1h4m1 0h4m-9 1h4m1 0h4M6 13h5m1 0h5M6 14h5m1 0h5M6 15h5m1 0h5M7 16h9m-9 1h9m-8 1h7m-5 1h3" /><path stroke="maroon" d="M8 5h7M6 6h2m7 0h2M5 7h1m3 0h5m3 0h1M4 8h1m2 0h2m5 0h2M3 9h1m2 0h1m9 0h1m1 0h1M3 10h1m1 0h1m10 0h1M2 11h1m2 0h1m10 0h1m2 0h1M2 12h1m1 0h1m12 0h1m1 0h1M2 13h1m1 0h1m12 0h1m1 0h1M2 14h1m1 0h1m12 0h1m1 0h1M2 15h1m1 0h1m12 0h1m1 0h1M2 16h1m1 0h1m12 0h1m1 0h1M2 17h1m2 0h1m10 0h1m2 0h1M3 18h1m1 0h1m10 0h1m1 0h1M3 19h1m3 0h2m5 0h2m2 0h1M4 20h1m4 0h5m3 0h1M6 21h1m8 0h2m-9 1h7" /><path stroke="silver" d="M3 6h1m15 0h1M9 9h1m3 0h1m-8 3h1m9 0h1M6 16h1m9 0h1m-8 3h1m3 0h1" /><path stroke="red" d="M8 6h7M6 7h3m5 0h3M5 8h2m9 0h2M4 9h2m11 0h1M4 10h1m12 0h2M3 11h2m12 0h2M3 12h1m14 0h1M3 13h1m14 0h1M3 14h1m14 0h1M3 15h1m14 0h1M3 16h1m14 0h1M3 17h2m12 0h2M4 18h1m12 0h1M4 19h3m9 0h2M5 20h4m5 0h3M7 21h8" /><path stroke="#00f" d="M11 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="navy" d="M21 15h1m-1 1h2m-3 1h3m-3 1h4m-5 1h1m1 0h3m-5 1h1m1 0h4m-7 1h1m3 0h3m-7 1h1m3 0h4m-9 1h1m5 0h3m-9 1h1m5 0h4m-11 1h1m7 0h3m-11 1h12m-13 1h1m8 0h4m-13 1h1m9 0h4m-15 1h1m10 0h4m-17 1h6m5 0h8" /></svg>;

export const main105Data = {
  '32x32_4': Main105_32x32_4
};

export interface Main105Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Main105: React.FC<Main105Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = main105Data[variant];

  return <Svg {...rest} />;
};
