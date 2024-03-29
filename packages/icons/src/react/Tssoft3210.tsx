import React from 'react';
import type { SVGProps } from "react";

const Tssoft3210_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 0h32M4 1h6m3 0h6m3 0h6M4 2h7m2 0h7m2 0h7M4 3h8m1 0h8m1 0h8M0 5h32M2 6h19m1 0h9M4 7h3m2 0h3m1 0h3m2 0h3m1 0h3m2 0h3M0 9h32M2 10h29M4 11h3m2 0h3m1 0h7m2 0h8M4 12h3m2 0h3m2 0h7m1 0h7M0 14h32M2 15h29M4 16h3m2 0h3m6 0h3m1 0h3m-12 1h3M0 18h32M2 19h29M4 20h7m3 0h6m2 0h3M4 21h6m5 0h4m3 0h3M0 23h32M2 24h29M0 26h32M1 27h3m1 0h1m2 0h2m2 0h12m1 0h7M2 28h1m1 0h2m2 0h2m1 0h13m1 0h7M2 29h2m1 0h1m1 0h3m2 0h1m1 0h1m1 0h1m1 0h1m1 0h4m1 0h1m1 0h1m1 0h3M1 30h2m1 0h2m1 0h3m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h1M0 31h32" /><path stroke="#fff" d="M0 1h4m6 0h3m6 0h3m6 0h4M0 2h4m7 0h2m7 0h2m7 0h3M0 3h4m8 0h1m8 0h1m8 0h2M0 4h32M0 6h2m19 0h1m9 0h1M0 7h4m3 0h2m3 0h1m3 0h2m3 0h1m3 0h2m3 0h2M0 8h32M0 10h2m29 0h1M0 11h4m3 0h2m3 0h1m7 0h2m8 0h2M0 12h4m3 0h2m3 0h2m7 0h1m7 0h3M0 13h32M0 15h2m29 0h1M0 16h4m3 0h2m3 0h6m3 0h1m3 0h7M0 17h13m3 0h16M0 19h2m29 0h1M0 20h4m7 0h3m6 0h2m3 0h7M0 21h4m6 0h5m4 0h3m3 0h7M0 22h32M0 24h2m29 0h1M0 25h32M0 27h1m3 0h1m1 0h2m2 0h2m12 0h1M0 28h2m1 0h1m2 0h2m2 0h1m13 0h1M0 29h2m2 0h1m1 0h1m3 0h2m1 0h1m1 0h1m1 0h1m1 0h1m4 0h1m1 0h1m1 0h1M0 30h1m2 0h1m2 0h1m3 0h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const tssoft3210Data = {
  '32x32_4': Tssoft3210_32x32_4
};

export interface Tssoft3210Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Tssoft3210: React.FC<Tssoft3210Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = tssoft3210Data[variant];

  return <Svg {...rest} />;
};
