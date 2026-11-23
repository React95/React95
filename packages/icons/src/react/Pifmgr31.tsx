import React from 'react';
import type { SVGProps } from "react";

const Pifmgr31_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M27 0h3m-5 1h5M15 2h1m6 0h3M14 3h1m1 0h6M8 12h1m14 0h1M8 13h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-2 1h2m-2 1h2m-2 1h2" /><path stroke="#000" d="M30 0h1m-1 1h1m-6 1h5m-8 1h3m-8 1h5m7 4h1m0 1h1m-1 1h1M0 11h1m30 0h1M1 12h1m7 0h1m21 0h1M2 13h1m6 0h1m21 0h1M3 14h2m3 0h1m21 0h1M5 15h2m1 0h1m21 0h1M8 16h2m19 0h1M8 17h1m1 0h3m15 0h1M8 18h1m4 0h4m8 0h3M8 19h1m8 0h8M7 20h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-3 1h2" /><path stroke="teal" d="M31 1h1m-1 1h1m-5 1h1m2 0h1m-6 1h1m2 0h2m-4 1h1m4 0h1m-5 1h4M3 23h1m-2 1h1m-3 1h1m2 0h1m4 0h1m1 0h1M0 26h1m1 0h1m6 0h1m1 0h1M0 27h1m1 0h1m6 0h1m1 0h1M0 28h1m2 0h1m3 0h2m1 0h1M1 29h1m2 0h2m4 0h1m-9 1h2m5 0h1" /><path stroke="maroon" d="M4 2h5M2 3h2m5 0h4M1 4h1m11 0h4M0 5h1m2 0h1m13 0h4M0 6h1m1 0h5m14 0h5M0 7h1m2 0h7m16 0h2M0 8h1m4 0h9m14 0h1M0 9h1m6 0h11m11 0h1M0 10h1m9 0h12m7 0h1M1 11h1m11 0h11m6 0h1M2 12h1m13 0h7m7 0h1M3 13h2m15 0h1m9 0h1M5 14h2m22 0h1M9 15h1m19 0h1m-20 1h3m15 0h1m-16 1h4m8 0h3m-11 1h8" /><path stroke="#0ff" d="M30 2h1m-6 1h2m1 0h2m1 0h1m-6 1h2m2 0h2m-5 1h4m0 1h1M4 22h2m-4 1h1m1 0h2m2 0h1m-8 1h1m1 0h2m3 0h3M1 25h2m1 0h1m4 0h1m1 0h1M1 26h1m1 0h2m3 0h1m1 0h1M1 27h1m1 0h2m3 0h1m1 0h1M1 28h2m1 0h1m4 0h1m1 0h1M0 29h1m1 0h2m2 0h4m-9 1h1m2 0h5" /><path stroke="red" d="M4 3h5M2 4h1m5 0h5M1 5h1m9 0h6m-3 1h7M1 7h1m17 0h7M1 8h2m19 0h6M1 9h4m19 0h5M1 10h6m18 0h1m1 0h2M2 11h8m15 0h1m1 0h3M3 12h5m2 0h3m11 0h1m1 0h4M5 13h3m2 0h6m8 0h6M9 14h20m-19 1h14m1 0h4m-16 1h6m4 0h5m-11 1h8" /><path stroke="#fff" d="M15 3h1M3 4h5M2 5h1m4 0h4M1 6h1m8 0h4M2 7h1m11 0h5M3 8h2m13 0h4M5 9h2m15 0h2M7 10h3m14 0h1m1 0h1m-17 1h3m11 0h1m1 0h1m-14 1h3m9 0h1m-10 1h4m1 0h3m0 2h1m-6 1h4" /><path stroke="silver" d="M4 5h3m0 1h3m0 1h4m0 1h4m0 1h4m0 1h2" /></svg>;

export const pifmgr31Data = {
  '32x32_4': Pifmgr31_32x32_4
};

export interface Pifmgr31Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pifmgr31Component = ({
  variant = '32x32_4',
  ...rest
}: Pifmgr31Props) => {
  const Svg = pifmgr31Data[variant];

  return <Svg {...rest} />;
};

export const Pifmgr31 = React.memo(Pifmgr31Component);
Pifmgr31.displayName = 'Pifmgr31';
