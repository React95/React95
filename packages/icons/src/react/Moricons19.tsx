import React from 'react';
import type { SVGProps } from "react";

const Moricons19_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 0h32M0 1h1m30 0h1M0 2h1m30 0h1M0 3h32M0 4h1m30 0h1M0 5h1m30 0h1M0 6h1m1 0h17m12 0h1M0 7h1m1 0h1m15 0h1m12 0h1M0 8h1m1 0h1m1 0h3m1 0h2m1 0h1m1 0h4m1 0h1m7 0h1m2 0h1m1 0h1M0 9h1m1 0h1m15 0h1m7 0h1m2 0h1m1 0h1M0 10h1m1 0h1m1 0h1m1 0h3m1 0h3m1 0h3m1 0h1m7 0h1m2 0h1m1 0h1M0 11h1m1 0h1m15 0h1m12 0h1M0 12h1m1 0h17m12 0h1M0 13h1m30 0h1M0 14h1m30 0h1M0 15h1m1 0h12m17 0h1M0 16h1m1 0h1m10 0h1m17 0h1M0 17h1m1 0h12m17 0h1M0 18h1m1 0h1m10 0h1m17 0h1M0 19h1m1 0h1m1 0h2m2 0h4m1 0h1m17 0h1M0 20h1m1 0h1m10 0h1m17 0h1M0 21h1m1 0h1m1 0h2m2 0h4m1 0h1m17 0h1M0 22h1m1 0h1m10 0h1m17 0h1M0 23h1m1 0h1m1 0h2m2 0h4m1 0h1m17 0h1M0 24h1m1 0h1m10 0h1m17 0h1M0 25h1m1 0h12m17 0h1M0 26h1m30 0h1M0 27h1m30 0h1M0 28h1m30 0h1M0 29h1m30 0h1M0 30h1m30 0h1M0 31h32" /><path stroke="gray" d="M1 1h30M1 2h1m3 0h2m3 0h2m3 0h2m3 0h2m3 0h2m3 0h1" /><path stroke="#0f0" d="M2 2h3m2 0h3m2 0h3m2 0h3m2 0h3m2 0h3" /><path stroke="#00f" d="M1 4h30M1 5h30M1 6h1m17 0h5m6 0h1M1 7h1m17 0h12M1 8h1m17 0h7m1 0h2m1 0h1M1 9h1m17 0h7m1 0h2m1 0h1M1 10h1m17 0h7m1 0h2m1 0h1M1 11h1m17 0h12M1 12h1m17 0h12M1 13h30M1 14h16m13 0h1M1 15h1m12 0h3m13 0h1M1 16h1m12 0h3m13 0h1M1 17h1m12 0h3m13 0h1M1 18h1m12 0h3m13 0h1M1 19h1m12 0h3m13 0h1M1 20h1m12 0h3m13 0h1M1 21h1m12 0h3m13 0h1M1 22h1m12 0h3m13 0h1M1 23h1m12 0h3m13 0h1M1 24h1m12 0h17M1 25h1m12 0h17M1 26h30" /><path stroke="purple" d="M24 6h6" /><path stroke="teal" d="M3 7h15M3 8h1m3 0h1m2 0h1m1 0h1m4 0h1M3 9h15M3 10h1m1 0h1m3 0h1m3 0h1m3 0h1M3 11h15m-1 3h13m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h13" /><path stroke="navy" d="M18 15h2m2 0h1m2 0h1m2 0h1m-11 1h11m-10 1h1m2 0h1m2 0h1m2 0h1m-11 1h11m-10 1h1m2 0h1m2 0h1m2 0h1m-11 1h11m-10 1h1m2 0h1m2 0h1m2 0h1m-11 1h11" /><path stroke="#ff0" d="M20 15h1m2 0h1m2 0h1M3 16h10m5 1h1m1 0h2m1 0h2m1 0h2M3 18h10M3 19h1m2 0h2m4 0h1m5 0h1m1 0h2m1 0h2m1 0h2M3 20h10M3 21h1m2 0h2m4 0h1m5 0h1m1 0h2m1 0h2m1 0h2M3 22h10M3 23h1m2 0h2m4 0h1M3 24h10" /><path stroke="olive" d="M21 15h1m2 0h1m2 0h1" /><path stroke="maroon" d="M1 27h30M1 28h30" /><path stroke="#0ff" d="M1 29h30M1 30h30" /></svg>;

export const moricons19Data = {
  '32x32_4': Moricons19_32x32_4
};

export interface Moricons19Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons19Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons19Props) => {
  const Svg = moricons19Data[variant];

  return <Svg {...rest} />;
};

export const Moricons19 = React.memo(Moricons19Component);
Moricons19.displayName = 'Moricons19';
