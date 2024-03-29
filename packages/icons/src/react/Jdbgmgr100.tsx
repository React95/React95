import React from 'react';
import type { SVGProps } from "react";

const Jdbgmgr100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M7 0h3m1 0h5m1 0h3M6 1h1m3 0h1m5 0h1m3 0h1M6 2h1m10 0h1m2 0h1M6 3h1m11 0h1m1 0h1M7 4h1m5 0h2m3 0h2M7 5h1m5 0h2m4 0h1M7 6h1m12 0h1M7 7h1m12 0h1M8 8h1m10 0h1M9 9h1m8 0h1m2 0h3M8 10h1m10 0h2m3 0h1M8 11h1m16 0h1M7 12h1m17 0h1M7 13h1m16 0h1M7 14h1m14 0h2M6 15h1m9 0h1m4 0h1M6 16h1m10 0h1m3 0h1M6 17h1m2 0h1m7 0h1m2 0h1M6 18h1m3 0h2m5 0h1m2 0h1M6 19h1m5 0h2m2 0h1m3 0h2M6 20h1m7 0h2m6 0h2M6 21h1m17 0h2M6 22h1m8 0h1m10 0h1M6 23h1m9 0h1m9 0h1M7 24h1m9 0h2m7 0h1M7 25h1m11 0h1m6 0h1M8 26h1m10 0h3m3 0h1M9 27h1m9 0h1m2 0h3m-15 1h1m8 0h1m-9 1h1m7 0h1m-8 1h2m4 0h1m-5 1h4" /><path stroke="silver" d="M7 1h3m1 0h5m1 0h3M7 2h10m1 0h2M7 3h11m1 0h1M8 4h5m2 0h3M8 5h5m2 0h3M8 6h12M8 7h11M9 8h8m-7 1h6m-7 1h10m2 0h2M9 11h14M8 12h16M8 13h16M8 14h7m1 0h6M7 15h9m1 0h4M7 16h8m3 0h3M7 17h2m1 0h4m4 0h2M7 18h3m2 0h2m4 0h2M7 19h5m5 0h3M7 20h7m2 0h6M7 21h17M7 22h8m1 0h8M7 23h9m1 0h6M8 24h9m2 0h3M8 25h8m4 0h2M9 26h6m-5 1h4m-3 1h3m-2 1h2m0 1h1" /><path stroke="#fff" d="M21 6h1m-1 1h1" /><path stroke="gray" d="M19 7h1m-3 1h2m-3 1h2m5 1h1m-1 1h2m-1 1h1m-10 4h2m-3 1h3m-3 1h3m-3 1h2m8 3h2m-3 1h3m-4 1h4m-10 1h3m3 0h4m-11 1h4m3 0h3m-11 1h5m-5 1h5m-5 1h5m-4 1h3" /></svg>;

export const jdbgmgr100Data = {
  '32x32_4': Jdbgmgr100_32x32_4
};

export interface Jdbgmgr100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Jdbgmgr100: React.FC<Jdbgmgr100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = jdbgmgr100Data[variant];

  return <Svg {...rest} />;
};
