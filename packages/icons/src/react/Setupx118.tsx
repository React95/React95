import React from 'react';
import type { SVGProps } from "react";

const Setupx118_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="olive" d="M26 7h4M3 8h3m17 0h3M3 9h1m2 0h2m12 0h3m3 0h1M5 10h1m2 0h2m7 0h3m3 0h1M7 11h1m2 0h2m4 0h1m3 0h1M9 12h1m2 0h2m2 0h1m-6 1h1m2 0h1m-1 1h1" /><path stroke="#ff0" d="M26 8h3M4 9h2m17 0h3M6 10h2m12 0h3M8 11h2m7 0h3m-10 1h2m0 1h2" /><path stroke="#000" d="M29 8h1m-3 1h2M4 10h1m19 0h2M6 11h1m14 0h3M8 12h1m8 0h3m4 0h1M9 13h2m13 0h1M9 14h1m2 0h2m10 0h1m-1 1h1m-2 1h2m-4 1h2m1 0h1m-7 1h3m3 0h1m-1 1h1m-1 1h1M7 21h1m16 0h1M7 22h1m16 0h1M8 23h1m14 0h1M9 24h2m10 0h2m-12 1h10" /><path stroke="gray" d="M10 9h10m-8 2h4m-9 1h1m13 0h2M7 13h2m14 0h1M7 14h1m2 0h1m10 0h2M7 15h1m3 0h10m2 0h1m-3 1h2m-4 1h2m2 5h1m-3 1h2m-4 1h2" /><path stroke="#fff" d="M10 10h7m6 2h1M8 14h1m14 0h1M9 15h2m10 0h2m-12 1h10M8 21h1m0 1h2m0 1h8" /><path stroke="silver" d="M14 12h2m4 0h1m-6 1h8m-12 1h1m3 0h6M8 15h1m0 1h2m0 1h8m4 4h1M8 22h1m12 0h2M9 23h2m8 0h2m-10 1h8" /><path stroke="maroon" d="M7 16h2m-2 1h1m1 0h2m12 0h1M7 18h1m3 0h7m3 0h3M7 19h1m10 0h6M7 20h1m10 0h6m-6 1h5m-5 1h3" /><path stroke="red" d="M8 17h1m-1 1h3m-3 1h10M8 20h10m-9 1h9m-7 1h7" /></svg>;

export const setupx118Data = {
  '32x32_4': Setupx118_32x32_4
};

export interface Setupx118Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Setupx118Component = ({
  variant = '32x32_4',
  ...rest
}: Setupx118Props) => {
  const Svg = setupx118Data[variant];

  return <Svg {...rest} />;
};

export const Setupx118 = React.memo(Setupx118Component);
Setupx118.displayName = 'Setupx118';
