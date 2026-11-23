import React from 'react';
import type { SVGProps } from "react";

const Pifmgr5_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="green" d="M6 2h4M3 3h3m1 0h1M4 4h1m3 0h1m1 0h1M5 5h3m2 0h2M6 6h2m1 0h1M8 7h1m3 0h1M9 8h2m1 0h1m-2 1h3" /><path stroke="#0f0" d="M6 3h1M5 4h3m0 1h2M8 6h1m0 1h1m1 1h1" /><path stroke="gray" d="M8 3h2M9 4h1m0 2h2m-2 1h2" /><path stroke="#000" d="M10 3h1m0 1h1m0 1h1m-1 1h1m4 0h1m-5 1h1m3 0h1m-5 1h2m1 0h1m-1 1h1m-1 1h1m-2 1h2m7 0h1m0 1h1m0 1h1m-1 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-2 1h1m-3 1h2m-11 1h9" /><path stroke="olive" d="M16 6h1m-2 1h1m-2 2h1m-1 1h1m-8 7h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1" /><path stroke="#ff0" d="M16 7h1m-2 1h1m-5 10h1m-2 1h1m0 2h1m-1 2h1" /><path stroke="silver" d="M15 9h1m-1 1h1m-5 1h1m7 0h1m-10 1h3m7 0h2m-9 1h7m-9 1h1m-1 1h3m-6 2h1m0 1h1m-1 1h1m1 0h1m-2 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1m-4 1h3" /><path stroke="maroon" d="M17 9h5M9 10h2m2 0h1m6 0h4M8 11h1m4 0h2m7 0h2M7 12h1m15 0h2M6 13h1m17 0h2M6 14h1m18 0h1M6 15h1m18 0h1M7 16h3m15 0h2m-17 1h2m13 0h2m-15 1h1m12 0h2m-15 1h1m12 0h2m-14 1h1m11 0h2m-14 1h1m11 0h2m-14 1h1m11 0h2m-14 1h1m11 0h1m-14 1h1m12 0h1m-15 1h1m12 0h1M7 26h4m13 0h1M8 27h1m14 0h1M9 28h1m11 0h2m-13 1h2m8 0h1" /><path stroke="red" d="M11 10h2m4 0h3M9 11h1m2 0h1m7 0h2M8 12h1m13 0h1M7 13h1m3 0h2m7 0h4M7 14h1m1 0h1m2 0h13M7 15h1m1 0h2m3 0h11m-15 1h15m-13 1h13m-12 1h12m-12 1h12m-11 1h11m-11 1h11m-11 1h11m-11 1h11m-12 1h12m-13 1h12m-13 1h13M9 27h14m-13 1h11m-9 1h8" /><path stroke="#fff" d="M10 11h1m-2 1h1m-2 1h3m-3 1h1m1 0h1m-3 1h1m0 2h1m0 1h1m0 2h1m-1 2h1m-2 2h1" /><path stroke="#f0f" d="M17 11h2m-6 1h7" /></svg>;

export const pifmgr5Data = {
  '32x32_4': Pifmgr5_32x32_4
};

export interface Pifmgr5Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pifmgr5Component = ({
  variant = '32x32_4',
  ...rest
}: Pifmgr5Props) => {
  const Svg = pifmgr5Data[variant];

  return <Svg {...rest} />;
};

export const Pifmgr5 = React.memo(Pifmgr5Component);
Pifmgr5.displayName = 'Pifmgr5';
