import React from 'react';
import type { SVGProps } from "react";

const Sysdm160_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M30 0h2M9 1h1m19 0h3M9 2h1m18 0h3M9 3h1m17 0h3M9 4h1m16 0h3M9 5h1m15 0h3M9 6h1m14 0h3M9 7h1m13 0h3M3 8h2m4 0h1m12 0h3M3 9h1m1 0h1m3 0h1m11 0h3M3 10h1m2 0h1m2 0h1m10 0h3M3 11h1m5 0h1m9 0h3M3 12h1m5 0h1m8 0h3M1 13h3m3 0h3m7 0h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m-4 1h3m9 0h2m-15 1h3m11 0h2m-17 1h3m9 0h1m3 0h1M9 21h3m10 0h1m3 0h2M8 22h3m10 0h2m4 0h1M7 23h3m11 0h1m5 0h2M6 24h3m19 0h1M5 25h3m20 0h2M4 26h3m12 0h8m2 0h1M3 27h3m13 0h1m9 0h2M2 28h3m13 0h2m10 0h1M1 29h3m14 0h1m11 0h1M0 30h3m13 0h3m9 0h3M0 31h2" /><path stroke="#ff0" d="M1 1h2m4 0h2M1 2h2m4 0h2M1 3h3m3 0h2M1 4h4m2 0h2M1 5h5m1 0h2M1 6h8M1 7h8M1 8h2m2 0h4M1 9h2m3 0h3m-8 1h2m4 0h2m-8 1h2m4 0h2m-8 1h2m4 0h2m13 6h2m-3 1h4m-5 1h2m2 0h2m-6 1h2m2 0h2m-7 1h2m4 0h2m-8 1h2m4 0h2m-9 1h10m-10 1h10m-11 1h2m8 0h2m-12 1h2m8 0h2m-13 1h2m10 0h2m-14 1h2m10 0h2" /></svg>;

export const sysdm160Data = {
  '32x32_4': Sysdm160_32x32_4
};

export interface Sysdm160Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Sysdm160Component = ({
  variant = '32x32_4',
  ...rest
}: Sysdm160Props) => {
  const Svg = sysdm160Data[variant];

  return <Svg {...rest} />;
};

export const Sysdm160 = React.memo(Sysdm160Component);
Sysdm160.displayName = 'Sysdm160';
