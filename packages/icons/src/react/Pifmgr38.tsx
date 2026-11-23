import React from 'react';
import type { SVGProps } from "react";

const Pifmgr38_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M3 0h10M2 1h2m8 0h1M8 2h1M6 3h1m1 0h1M6 4h1m1 0h1M6 5h1m1 0h1M6 6h1m1 0h1M6 7h1m1 0h1" /><path stroke="#ff0" d="M4 1h8M7 2h1M7 3h1M7 4h1M7 5h1M7 6h1M7 7h1" /><path stroke="#000" d="M13 1h1M3 2h4m2 0h4M9 3h1M9 4h1M9 5h1M9 6h1M9 7h1M6 8h4m4 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m11 0h1m-13 1h1m11 0h1m2 0h1M5 15h1m8 0h1m10 0h1m3 0h1M5 16h1m8 0h1m6 0h1m2 0h1M4 17h1m8 0h1m8 0h2m3 0h1m2 0h1M4 18h1m7 0h1m11 0h1m1 0h1m3 0h1M0 19h12m7 0h3m3 0h1m3 0h1M3 20h1m16 0h1m1 0h1m2 0h1m2 0h1M3 21h3m13 0h1m3 0h1m2 0h2M2 22h2m2 0h1m10 0h3m2 0h2m2 0h1M2 23h1m1 0h2m11 0h1m2 0h4m1 0h1M2 24h1m12 0h3m2 0h1m3 0h1M2 25h1m1 0h2m9 0h1m2 0h3m2 0h1M3 26h1m2 0h1m6 0h3m2 0h1m2 0h2M3 27h3m2 0h1m7 0h3m2 0h1M3 28h1m3 0h1m1 0h1m6 0h1m2 0h2M4 29h2m1 0h1m1 0h1m4 0h3m2 0h1M6 30h3m3 0h2m3 0h2M9 31h3" /><path stroke="gray" d="M3 7h3m4 0h5M2 8h1m7 0h3M1 9h1m11 0h1M0 10h1m11 0h2M0 11h1m10 0h3M0 12h1m10 0h3M0 13h1m10 0h3M0 14h1m4 0h2m4 0h3M0 15h1m5 0h1m4 0h3M0 16h1m10 0h3m6 0h1M0 17h1m10 0h2m6 0h1M0 18h4m1 0h7m6 0h1m4 0h1m-2 1h3M4 20h1m18 0h2m-1 1h2M5 22h1m18 0h2M3 23h1m20 0h1M3 25h1m1 1h1m-2 2h1m3 0h1m4 1h1m-5 1h1m1 0h1" /><path stroke="silver" d="M3 8h3M2 9h10M1 11h10M1 12h10M1 13h10M1 14h4m2 0h4M1 15h4m2 0h4M1 16h4m1 0h5m4 0h5M1 17h3m1 0h6m3 0h5m1 0h1m-8 1h5m1 0h1m1 0h2m-11 1h5m13 0h1m-2 1h2m-3 1h2m-3 1h2M6 23h1m19 0h2M3 24h1m21 0h2m-3 1h2m-3 1h2m-3 1h2M5 28h1m15 0h2M6 29h1m5 0h1m7 0h2m-12 1h1m8 0h2" /><path stroke="#fff" d="M13 8h1m-2 1h1M1 10h11m9 7h1m-2 1h1" /><path stroke="maroon" d="M24 12h2m-3 1h1m3 0h2m-7 1h1m2 0h1m-5 1h1m2 0h1m3 0h1m-6 1h1m3 0h3m-4 1h1m-2 1h1m3 0h1m-13 1h2m9 0h1m-13 1h1m10 0h1m-13 1h2m1 0h1m3 0h1m-9 1h1m6 0h1m-9 1h2m1 0h1m-5 1h1m6 0h1m3 0h1m-12 1h1m1 0h1m6 0h2m-7 1h2m-5 1h1m5 0h2m-8 1h3m1 1h2" /><path stroke="red" d="M24 13h2m-3 1h2m2 0h2m-7 1h2m2 0h2m-6 1h1m2 0h2m-3 1h2m2 0h2m-3 1h2m-3 1h2m-11 1h3m1 0h1m4 0h1m-10 1h1m2 0h2m-7 1h2m3 0h1m-6 1h1m2 0h2m-7 1h2m3 0h1m2 0h2m-10 1h1m2 0h2m1 1h2m-7 1h2m1 1h2" /></svg>;

export const pifmgr38Data = {
  '32x32_4': Pifmgr38_32x32_4
};

export interface Pifmgr38Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pifmgr38Component = ({
  variant = '32x32_4',
  ...rest
}: Pifmgr38Props) => {
  const Svg = pifmgr38Data[variant];

  return <Svg {...rest} />;
};

export const Pifmgr38 = React.memo(Pifmgr38Component);
Pifmgr38.displayName = 'Pifmgr38';
