import React from 'react';
import type { SVGProps } from "react";

const Moricons90_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="red" d="M1 0h8m18 0h5M2 1h8m16 0h5M3 2h8m14 0h5M4 3h8m12 0h5M5 4h8m10 0h5M6 5h8m8 0h5M7 6h8m6 0h5M8 7h8m4 0h5M9 8h8m2 0h5M10 9h7m1 0h5m-12 1h5m1 0h5m-12 1h5m1 0h5M9 12h5m1 0h7M8 13h5m2 0h8M7 14h5m4 0h8M6 15h5m6 0h8M5 16h5m8 0h8M4 17h5m10 0h8M3 18h5m12 0h8M2 19h5m14 0h8M1 20h5m16 0h8" /><path stroke="silver" d="M0 21h32M0 22h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 23h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 24h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 25h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 26h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 27h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 28h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 29h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 30h1m3 0h1m3 0h1m3 0h1m3 0h1m5 0h1m4 0h1m3 0h1M0 31h32" /><path stroke="#00f" d="M1 22h3m1 0h3m1 0h3m1 0h3m1 0h5m1 0h4m1 0h3M1 23h2m2 0h1m1 0h1m1 0h3m1 0h1m1 0h1m1 0h5m1 0h4m1 0h1m1 0h1M1 24h2m2 0h3m1 0h3m1 0h3m1 0h2m1 0h2m1 0h2m1 0h1m1 0h1m1 0h1M5 25h1m1 0h1m5 0h1m1 0h1m1 0h1m3 0h1m4 0h1m1 0h1m1 0h1M2 26h1m2 0h1m1 0h1m2 0h1m2 0h1m1 0h1m1 0h2m1 0h2m2 0h1m1 0h1m1 0h1m1 0h1M5 27h1m1 0h1m5 0h1m1 0h1m1 0h2m1 0h2m6 0h1m1 0h1M1 28h3m1 0h3m1 0h2m2 0h3m1 0h2m2 0h1m1 0h4m1 0h1m1 0h1M1 29h3m1 0h3m5 0h3m1 0h5m1 0h4m1 0h3M1 30h3m1 0h3m1 0h3m1 0h3m1 0h5m1 0h4m1 0h3" /><path stroke="#fff" d="M3 23h1m2 0h1m7 0h1m14 0h1M3 24h1m15 0h1m5 0h1m3 0h1M1 25h3m2 0h1m2 0h3m2 0h1m3 0h3m2 0h3m3 0h1M1 26h1m1 0h1m2 0h1m2 0h1m1 0h1m2 0h1m4 0h1m3 0h1m1 0h1m3 0h1M1 27h3m2 0h1m2 0h3m2 0h1m4 0h1m3 0h4m2 0h1m-19 1h1m7 0h2m8 0h1M9 29h3" /></svg>;

export const moricons90Data = {
  '32x32_4': Moricons90_32x32_4
};

export interface Moricons90Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons90Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons90Props) => {
  const Svg = moricons90Data[variant];

  return <Svg {...rest} />;
};

export const Moricons90 = React.memo(Moricons90Component);
Moricons90.displayName = 'Moricons90';
