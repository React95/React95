import React from 'react';
import type { SVGProps } from "react";

const Cdplayer110_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M8 2h15M8 3h1m13 0h1M8 4h1m13 0h2M8 5h1m13 0h1m1 0h1M8 6h1m13 0h1m2 0h1M8 7h1m13 0h1M8 8h6M7 9h2m-3 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m5 0h1m1 0h1m-9 1h1m-1 1h1m5 0h1m1 0h1m-9 1h1m0 1h1m-1 1h1m0 1h1m0 1h2m-1 1h3m-3 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M9 3h13M9 4h13M9 5h13m1 0h1M9 6h13m1 0h2M9 7h13m-8 1h12M16 9h10m-9 1h9m-11 1h1m2 0h8m-12 1h1m5 0h6m-13 1h1m6 0h6m-5 1h5m-15 1h1m9 0h5M9 16h1m11 0h5M8 17h1m2 0h1m9 0h5M7 18h1m13 0h5M6 19h1m14 0h5m-5 1h5m-6 1h6m-7 1h7M9 23h1m8 0h8M9 24h3m5 0h9M9 25h17M9 26h17M9 27h17" /><path stroke="#000" d="M23 3h1m0 1h1m0 1h1m0 1h1m-4 1h5m-1 1h1M14 9h2m11 0h1m-12 1h1m10 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-10 1h1m8 0h1m-17 1h1m6 0h1m8 0h1m-18 1h1m1 0h1m5 0h1m8 0h1m-17 1h1m6 0h1m8 0h1m-10 1h1m8 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-12 1h1m10 0h1m-14 1h2m11 0h1m-17 1h3m13 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M8 29h20" /><path stroke="silver" d="M26 8h1M11 9h3m12 0h1m-16 1h5m10 0h1m-16 1h4m1 0h1m9 0h1m-16 1h3m1 0h2m1 0h2m6 0h1M5 13h2m4 0h2m1 0h4m1 0h1m6 0h1M5 14h3m5 0h5m1 0h2m5 0h1M5 15h4m4 0h5m1 0h2m5 0h1M5 16h4m5 0h4m1 0h2m5 0h1M5 17h3m1 0h2m4 0h3m1 0h2m5 0h1M6 18h1m1 0h4m4 0h1m1 0h3m5 0h1M7 19h5m6 0h3m5 0h1M7 20h5m5 0h4m5 0h1M9 21h3m4 0h4m6 0h1m-13 1h5m7 0h1m-17 1h8m8 0h1m-15 1h5m9 0h1m-1 1h1m-1 1h1m-1 1h1M9 28h18" /><path stroke="#ff0" d="M9 9h2m-3 1h3m-2 1h2m-2 1h2m-1 1h1m2 4h1m-1 1h1m-1 1h2m-1 1h2" /><path stroke="#0ff" d="M7 10h1m-1 1h2m-1 1h1m0 1h1m-1 1h1m3 2h1m0 1h1m-1 1h2m-1 1h2" /><path stroke="#0f0" d="M6 11h1m-1 1h2m-1 1h2m-1 1h1m0 1h1m2 2h1m-1 1h1m-1 1h1m-1 1h2m-2 1h2" /></svg>;

export const cdplayer110Data = {
  '32x32_4': Cdplayer110_32x32_4
};

export interface Cdplayer110Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Cdplayer110: React.FC<Cdplayer110Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = cdplayer110Data[variant];

  return <Svg {...rest} />;
};
