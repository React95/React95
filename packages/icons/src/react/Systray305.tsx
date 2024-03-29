import React from 'react';
import type { SVGProps } from "react";

const Systray305_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="silver" d="M14 0h5m-6 1h1m3 0h2m-9 1h4m1 0h4M7 3h3m3 0h1m1 0h4m1 0h2M6 4h1m1 0h1m1 0h4m5 0h6M6 5h2m1 0h1m1 0h13M6 6h1m1 0h2m1 0h11m2 0h1M6 7h1m1 0h3m11 0h3M6 8h1m1 0h17M6 9h1m1 0h6m4 0h7M6 10h1m1 0h6m1 0h2m1 0h7M6 11h1m1 0h4m3 0h2m3 0h5M6 12h1m1 0h4m1 0h6m1 0h5M6 13h1m1 0h4m1 0h6m1 0h5M6 14h1m1 0h4m3 0h2m3 0h5M6 15h1m1 0h6m1 0h2m1 0h7M6 16h1m1 0h6m4 0h7M6 17h1m1 0h17M6 18h1m1 0h17M6 19h1m1 0h17M6 20h1m1 0h17M6 21h1m1 0h17M6 22h1m1 0h17M6 23h1m1 0h17M6 24h1m1 0h17M6 25h1m1 0h4m8 0h5M6 26h1m1 0h4m1 0h6m1 0h5M6 27h6m8 0h5M8 28h16M9 29h14m-12 1h10" /><path stroke="#fff" d="M14 1h3m-3 1h1m-5 1h3m1 0h1M9 4h1m0 1h1M7 6h1M7 7h1M7 8h1M7 9h1m-1 1h1m9 0h1M7 11h1m9 0h1M7 12h1m11 0h1M7 13h1m11 0h1M7 14h1m5 0h2m2 0h3M7 15h1m9 0h1M7 16h1m7 0h3M7 17h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m11 0h1M7 26h1m11 0h1m-7 1h7" /><path stroke="gray" d="M19 2h3m-3 1h1m2 0h3M7 4h1m6 0h5m6 0h1M8 5h1m15 0h2M10 6h1m11 0h2m1 0h1M11 7h11m3 0h1m-1 1h1M14 9h4m7 0h1m-12 1h1m10 0h1m-14 1h3m3 0h2m5 0h1m-14 1h1m12 0h1m-14 1h1m12 0h1m-14 1h1m12 0h1m-12 1h1m10 0h1m-12 1h1m10 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-14 1h7m6 0h1m-14 1h1m12 0h1m-14 1h1m12 0h1M7 28h1m16 0h1M8 29h1m14 0h1M9 30h2m10 0h2m-12 1h10" /></svg>;

export const systray305Data = {
  '32x32_4': Systray305_32x32_4
};

export interface Systray305Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Systray305: React.FC<Systray305Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = systray305Data[variant];

  return <Svg {...rest} />;
};
