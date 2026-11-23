import React from 'react';
import type { SVGProps } from "react";

const Pifmgr14_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M9 1h18M8 2h1M7 3h1m17 0h1M6 4h1m17 0h2M5 5h1m17 0h3M5 6h1m16 0h4M5 7h1m1 0h13m2 0h4M5 8h1m1 0h1m14 0h4M5 9h1m1 0h1m14 0h4M5 10h1m1 0h1m3 0h6m5 0h4M5 11h1m1 0h1m3 0h1m10 0h4M5 12h1m1 0h1m3 0h1m10 0h4M5 13h1m1 0h1m3 0h1m10 0h4M5 14h1m1 0h1m14 0h4M5 15h1m1 0h1m14 0h4M5 16h1m16 0h4M5 17h1m16 0h4M5 18h1m1 0h13m2 0h4M5 19h1m1 0h1m14 0h4M5 20h1m1 0h1m14 0h4M5 21h1m1 0h1m3 0h6m5 0h4M5 22h1m1 0h1m3 0h1m10 0h4M5 23h1m1 0h1m3 0h1m10 0h4M5 24h1m1 0h1m3 0h1m10 0h4M5 25h1m1 0h1m14 0h4M5 26h1m1 0h1m14 0h3M5 27h1m16 0h2M5 28h1m1 0h16" /><path stroke="#fff" d="M9 2h1m15 0h1M8 3h1m15 0h1M7 4h1m15 0h1M6 5h17M6 6h1M6 7h1M6 8h1m1 0h12M6 9h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m3 0h4M6 13h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h12M6 20h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m3 0h4M6 24h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1" /><path stroke="silver" d="M10 2h15M9 3h15M8 4h15M7 6h15m-1 1h1m-1 1h1M9 9h11m1 0h1M9 10h2m6 0h3m1 0h1M9 11h2m6 0h3m1 0h1M9 12h2m6 0h3m1 0h1M9 13h2m6 0h3m1 0h1M9 14h11m1 0h1M9 15h11m1 0h1m-1 1h1M7 17h15m-1 1h1m-1 1h1M9 20h11m1 0h1M9 21h2m6 0h3m1 0h1M9 22h2m6 0h3m1 0h1M9 23h2m6 0h3m1 0h1M9 24h2m6 0h3m1 0h1M9 25h11m1 0h1M9 26h11m1 0h1m-1 1h1M6 28h1" /><path stroke="#000" d="M26 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-11 1h1m3 0h1m5 0h1m-11 1h1m3 0h1m5 0h1m-15 1h5m3 0h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1M7 16h14m5 0h1m-1 1h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1m-11 1h1m3 0h1m5 0h1m-11 1h1m3 0h1m5 0h1m-15 1h5m3 0h1m5 0h1m-7 1h1m5 0h1m-7 1h1m4 0h1M7 27h14m3 0h1m-2 1h1M5 29h18" /><path stroke="#ff0" d="M12 11h4m-4 11h4" /></svg>;

export const pifmgr14Data = {
  '32x32_4': Pifmgr14_32x32_4
};

export interface Pifmgr14Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pifmgr14Component = ({
  variant = '32x32_4',
  ...rest
}: Pifmgr14Props) => {
  const Svg = pifmgr14Data[variant];

  return <Svg {...rest} />;
};

export const Pifmgr14 = React.memo(Pifmgr14Component);
Pifmgr14.displayName = 'Pifmgr14';
