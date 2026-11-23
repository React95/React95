import React from 'react';
import type { SVGProps } from "react";

const Pifmgr37_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M9 1h1M9 2h2m10 0h1M9 3h1m1 0h1m8 0h2M9 4h1m2 0h5m2 0h1m1 0h1M8 5h2m2 0h1m4 0h2m2 0h1M7 6h1m2 0h2m6 0h1m2 0h1M6 7h1m12 0h2M5 8h1M1 9h5m8 0h2M2 10h1m3 0h1m6 0h1m2 0h1M3 11h1m2 0h1m6 0h1m2 0h1m6 0h5M3 12h2m9 0h2m6 0h1m3 0h1M3 13h1m18 0h1m2 0h1M3 14h1m5 0h2m12 0h2M3 15h1m4 0h1m2 0h1m3 0h2M3 16h1m4 0h1m2 0h1m2 0h1m2 0h1M3 17h2m4 0h2m3 0h1m2 0h1m9 0h2M2 18h1m2 0h1m9 0h1m1 0h1m6 0h3m1 0h1M1 19h1m3 0h1m10 0h2m2 0h2m1 0h1M0 20h6m11 0h1m1 0h1m2 0h1m6 0h2m-21 1h2m7 0h1m2 0h1m6 0h1M9 22h1m2 0h1m7 0h1m1 0h1m5 0h2M9 23h1m2 0h1m8 0h2m5 0h1M9 24h1m1 0h1m10 0h1m3 0h2M9 25h2m15 0h1M9 26h1m15 0h1m-2 1h1m-1 1h1m-1 1h2m-2 1h1" /><path stroke="#fff" d="M10 3h1m-1 1h1m9 0h1M10 5h1m8 0h1M3 10h1m10 0h1M4 11h1m0 1h1m17 0h3M9 15h1m5 2h1M3 18h1m12 0h1M2 19h1m17 2h1m-11 1h1m10 0h1m-12 1h1m-1 1h1" /><path stroke="silver" d="M11 4h1m-1 1h1m8 0h1m-2 1h2M4 10h2m9 0h1M5 11h1m8 0h2m7 2h2m-15 2h1m-2 1h2m4 0h2m-1 1h1M4 18h1m-2 1h2m15 1h2m-1 1h1m-11 1h1m-1 1h1" /><path stroke="#000" d="M13 5h4M8 6h2m2 0h6M7 7h12M6 8h16M6 9h8m2 0h7M7 10h6m4 0h6M7 11h6m4 0h6M6 12h8m2 0h6M4 13h18M4 14h5m2 0h12M4 15h4m4 0h3m2 0h7M4 16h4m4 0h2m4 0h6M5 17h4m2 0h3m4 0h6M6 18h9m3 0h5m6 0h1M6 19h10m2 0h2m2 0h1m2 0h4m1 0h1M6 20h11m1 0h1m4 0h3m5 0h1M6 21h4m2 0h7m12 0h1M7 22h2m4 0h7m10 0h2M8 23h1m4 0h6m11 0h1m-19 1h5m11 0h3m-3 1h1m-3 1h3m-3 1h1m-2 1h2m-1 1h1m-1 1h1m-2 1h1" /><path stroke="#ff0" d="M27 18h1m-4 1h1m4 0h1m0 2h1m-2 2h1m-3 2h1m-3 2h1m-1 3h1" /></svg>;

export const pifmgr37Data = {
  '32x32_4': Pifmgr37_32x32_4
};

export interface Pifmgr37Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pifmgr37Component = ({
  variant = '32x32_4',
  ...rest
}: Pifmgr37Props) => {
  const Svg = pifmgr37Data[variant];

  return <Svg {...rest} />;
};

export const Pifmgr37 = React.memo(Pifmgr37Component);
Pifmgr37.displayName = 'Pifmgr37';
