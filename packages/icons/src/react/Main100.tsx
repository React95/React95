import React from 'react';
import type { SVGProps } from "react";

const Main100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M3 0h5M2 1h1M1 2h1m0 1h1M2 4h1m0 1h2m0 1h2m3 0h8M7 7h3m1 0h1m5 0h1M6 8h2m4 0h2m5 0h1M6 9h1m7 0h1M5 10h1m6 0h2m7 0h1M4 11h1m6 0h1m10 0h1M3 12h1m6 0h1m12 0h1M3 13h1m5 0h1m14 0h1M3 14h1m4 0h1m16 0h1M3 15h1m3 0h1m18 0h1M3 16h1m0 1h1m22 0h1M5 18h1m21 0h1M6 19h1m21 0h1M7 20h1m20 0h1M8 21h1m19 0h1M9 22h1m18 0h1M9 23h1m18 0h1m-19 1h1m16 0h2m-19 1h1m16 0h2m-18 1h1m14 0h2m-16 1h1m12 0h3m-16 1h1m10 0h4m-14 1h1m7 0h5m-12 1h10" /><path stroke="#000" d="M3 1h5M2 2h1M1 3h1M1 4h1m0 1h1m0 1h2m0 1h2m11 0h2m0 1h1m-6 1h7m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-2 1h1m-3 1h2m-10 1h8" /><path stroke="#fff" d="M10 7h1M8 8h4M7 9h7m-8 1h6m2 0h2M5 11h6m1 0h7m1 0h1M4 12h6m1 0h2m1 0h6m1 0h1M5 13h4m1 0h2m1 0h8m1 0h1M6 14h2m1 0h2m1 0h9M8 15h2m1 0h12M4 16h1m4 0h13m1 0h1M5 17h1m4 0h13M6 18h1m4 0h11m1 0h1M7 19h1m4 0h11M8 20h1m3 0h10m1 0h1M9 21h1m3 0h10m-13 1h1m2 0h9m-12 1h1m2 0h8m1 0h1m-12 1h1m2 0h8m-11 1h1m2 0h6m-8 1h1m1 0h5m1 0h1m-8 1h1m1 0h3m1 0h1m-7 1h1m0 1h1" /><path stroke="silver" d="M12 7h5m-3 1h5m-3 2h5m-2 1h1m1 0h1m-2 1h1m1 0h1M4 13h1m16 0h1m1 0h1M4 14h2m15 0h4M4 15h3m16 0h3M5 16h4m13 0h1m1 0h3M6 17h4m13 0h4M7 18h4m11 0h1m1 0h3M8 19h4m11 0h5M9 20h3m10 0h1m1 0h4m-18 1h3m10 0h5m-17 1h2m9 0h6m-17 1h2m8 0h1m1 0h5m-16 1h2m8 0h5m-15 1h2m6 0h7m-14 1h1m5 0h1m1 0h5m-12 1h1m3 0h1m1 0h5m-11 1h9m-8 1h6" /><path stroke="navy" d="M13 12h1m-2 1h1m-2 1h1m-2 1h1" /></svg>;

export const main100Data = {
  '32x32_4': Main100_32x32_4
};

export interface Main100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Main100: React.FC<Main100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = main100Data[variant];

  return <Svg {...rest} />;
};
