import React from 'react';
import type { SVGProps } from "react";

const Pifmgr34_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M9 0h1M5 1h1m3 0h1M6 2h1m2 0h1M4 3h1m2 0h1M5 4h1m0 1h1M3 6h2m1 1h1M5 8h1M4 9h1" /><path stroke="gray" d="M23 1h4m-6 1h2m-4 1h2m2 0h3M9 4h2m7 0h1m2 0h5M8 5h2m7 0h1m1 0h6M8 6h3m5 0h1m1 0h7M15 7h1m1 0h7m2 0h1M16 8h8m2 0h1M16 9h7m2 0h2m-15 1h1m1 0h1m2 0h6m2 0h1m-15 1h1m1 0h3m2 0h4m2 0h2m-16 1h1m1 0h5m2 0h2m2 0h3M9 13h1m1 0h7m4 0h1m1 0h1M8 14h1m1 0h9m2 0h1m2 0h1M7 15h1m1 0h9m2 0h1m2 0h2M7 16h1m1 0h8m2 0h1m3 0h1M6 17h1m1 0h8m2 0h1m4 0h1M5 18h1m1 0h8m2 0h1m4 0h1m3 0h1M5 19h1m1 0h7m2 0h1m4 0h1m4 0h1M4 20h1m1 0h7m2 0h1m4 0h1m4 0h2M4 21h1m1 0h5m3 0h1m3 0h1m6 0h1M5 22h1m9 0h1m8 0h1m-3 1h2m-4 1h3m-6 1h5m-6 1h5M9 27h5m-6 1h1m16 0h1M8 29h19" /><path stroke="#fff" d="M23 2h3m-5 1h2m3 0h1m-8 1h2m5 0h1M10 5h1m7 0h1m6 0h1M11 6h1m5 0h1m7 0h1M16 7h1m7 0h1M15 8h1m8 0h1m-2 1h1m-11 1h1m9 0h1m-12 1h1m9 0h1m-12 1h1m9 0h1m-12 1h1m9 0h1M9 14h1m9 0h1M8 15h1m9 0h1M8 16h1m8 0h1M7 17h1m8 0h1M6 18h1m8 0h1M6 19h1m7 0h1M5 20h1m7 0h1m-9 1h1m5 0h2m-7 1h5m-2 6h1" /><path stroke="silver" d="M26 2h1m-4 11h1m-2 1h2m-3 1h2m-3 1h3m-4 1h4m-5 1h4m3 0h1m-9 1h4m3 0h2m-10 1h4m3 0h2m-10 1h3m4 0h3m-12 1h2m5 0h4m-5 1h3m-4 1h2m-10 4h15" /><path stroke="#000" d="M27 2h1m-1 1h1m-1 1h1M11 5h1m14 0h2M12 6h1m13 0h2M9 7h5m11 0h1m1 0h1M13 8h2m10 0h1m1 0h1M13 9h3m8 0h1m2 0h1m-13 1h2m7 0h1m1 0h1m-11 1h2m5 0h1m2 0h1m-10 1h2m3 0h1m3 0h1m-9 1h2m1 0h1m3 0h1m-6 1h1m4 0h1m-7 1h1m5 0h1m-8 1h1m5 0h1m-8 1h1m6 0h3m-11 1h1m6 0h2m2 0h1m-13 1h1m6 0h2m3 0h1m-14 1h1m6 0h2m4 0h1m-15 1h1m5 0h3m4 0h1m-16 1h2m3 0h4m5 0h1M6 23h10m2 0h1m5 0h1m-8 1h1m5 0h1m-8 1h1m5 0h1m-8 1h1m5 0h1m-8 1h12m0 1h1M7 29h1m19 0h1M8 30h19" /></svg>;

export const pifmgr34Data = {
  '32x32_4': Pifmgr34_32x32_4
};

export interface Pifmgr34Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pifmgr34Component = ({
  variant = '32x32_4',
  ...rest
}: Pifmgr34Props) => {
  const Svg = pifmgr34Data[variant];

  return <Svg {...rest} />;
};

export const Pifmgr34 = React.memo(Pifmgr34Component);
Pifmgr34.displayName = 'Pifmgr34';
