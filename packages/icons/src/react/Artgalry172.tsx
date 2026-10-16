import React from 'react';
import type { SVGProps } from "react";

const Artgalry172_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#ff0" d="M2 1h1m1 0h1M2 2h2m1 0h1M3 3h2m1 0h1M4 4h2m1 0h1M5 5h2m1 0h1M6 6h2m1 0h1M7 7h1m1 2h1m1 0h1m-1 2h1m11 13h1m-2 1h1m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m1 0h1m-3 1h2m-1 1h2" /><path stroke="#000" d="M5 1h1m0 1h1m0 1h1m0 1h1m0 1h21M2 6h1m7 0h1m13 0h1m4 0h1M3 7h1m4 0h2m1 0h1m12 0h1m1 0h2m1 0h1M4 8h1m2 0h1m3 0h1m12 0h1m1 0h2m1 0h1M5 9h1m1 0h1m4 0h1m1 0h9m1 0h1m4 0h1M5 10h3m4 0h1m11 0h6M5 11h1m2 0h1m4 0h1m10 0h1m4 0h1M5 12h1m3 0h2m1 0h2m1 0h8m1 0h1m4 0h1M5 13h1m5 0h4m9 0h1m4 0h1M5 14h1m1 0h2m4 0h1m10 0h6M5 15h1m1 0h2m1 0h13m1 0h1m4 0h1M5 16h1m18 0h1m4 0h1M5 17h1m1 0h2m15 0h1m4 0h1M5 18h1m1 0h2m1 0h13m1 0h1m4 0h1M5 19h1m12 0h2m4 0h1m4 0h1M5 20h1m1 0h2m8 0h1m2 0h1m3 0h1m4 0h1M5 21h1m1 0h2m1 0h4m2 0h1m4 0h8M5 22h1m9 0h1m4 0h1m1 0h1M5 23h1m9 0h1m3 0h1m3 0h1M5 24h1m7 0h2m1 0h1m1 0h1m3 0h1m1 0h1M5 25h1m4 0h3m4 0h1m3 0h1m3 0h1M5 26h1m2 0h2m8 0h1m1 0h1m5 0h1M5 27h3m11 0h1m7 0h1m-8 1h1m0 1h1m0 1h1" /><path stroke="#fff" d="M4 2h1m0 1h1m0 1h1m0 1h1M3 6h1m4 0h1m2 0h13m1 0h4M4 7h1m7 0h12m1 0h1m2 0h1M5 8h1m2 0h1m1 0h1m1 0h12m1 0h1m2 0h1M6 9h1m6 0h1m9 0h1m1 0h4M8 10h1m1 0h1m2 0h11M6 11h2m1 0h1m4 0h10m1 0h4M6 12h3m2 0h1m2 0h1m8 0h1m1 0h4M6 13h5m4 0h9m1 0h4M6 14h1m2 0h4m1 0h10M6 15h1m2 0h1m13 0h1m1 0h4M6 16h18m1 0h4M6 17h1m2 0h15m1 0h4M6 18h1m2 0h1m13 0h1m1 0h4M6 19h12m2 0h4m1 0h4M6 20h1m2 0h8m1 0h1m2 0h3m1 0h4M6 21h1m2 0h1m4 0h2m1 0h1m1 0h1M6 22h9m1 0h1m1 0h1M6 23h9m2 0h1m3 0h1M6 24h7m-7 1h4m13 0h1M6 26h2m16 0h1m-5 1h1m4 0h1m-5 1h1m4 0h1m-5 1h1" /><path stroke="olive" d="M2 3h1M2 4h2M3 5h2M4 6h2M5 7h2M6 8h1m14 18h1m-1 1h2m-1 1h2m-1 1h2m-1 1h2" /><path stroke="red" d="M10 7h1M9 8h1M8 9h1m1 0h1m-2 1h1m1 0h1m-2 1h1m1 0h1m6 9h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-2 1h1" /><path stroke="#0f0" d="M21 22h1m-2 1h1m1 0h1m-3 1h2" /><path stroke="green" d="M19 24h1m-2 1h3m-2 1h1" /></svg>;

export const artgalry172Data = {
  '32x32_4': Artgalry172_32x32_4
};

export interface Artgalry172Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Artgalry172Component = ({
  variant = '32x32_4',
  ...rest
}: Artgalry172Props) => {
  const Svg = artgalry172Data[variant];

  return <Svg {...rest} />;
};

export const Artgalry172 = React.memo(Artgalry172Component);
Artgalry172.displayName = 'Artgalry172';
