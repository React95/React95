import React from 'react';
import type { SVGProps } from "react";

const Moricons91_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 0h18M0 1h1m15 0h1m1 0h1M0 2h1m15 0h1m2 0h1M0 3h1m15 0h1m3 0h1M0 4h1m15 0h1m4 0h1M0 5h1m15 0h1m5 0h1M0 6h1m15 0h7M0 7h1m21 0h1M0 8h1m21 0h1M0 9h1m21 0h1M0 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m21 0h1M0 26h1m21 0h1M0 27h23" /><path stroke="#fff" d="M1 1h15m1 0h1M1 2h15m1 0h2M1 3h15m1 0h3M1 4h4m10 0h1m1 0h4M1 5h15m1 0h5M1 6h4m10 0h1M1 7h12M1 8h4m16 0h1M1 9h9m-9 1h4m9 0h4M1 11h8m4 0h1m4 0h1M1 12h4m-4 1h7m-7 1h4m-4 1h7m-7 1h4m-4 1h7m11 0h1M1 18h4m8 0h1m4 0h1M1 19h7m6 0h4M1 20h4m-4 1h9m-9 1h4m-4 1h12M1 24h20M1 25h21M1 26h21" /><path stroke="#00f" d="M5 4h1m1 0h1m1 0h1m1 0h1m1 0h1M5 6h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m-5 2h1m1 0h1m-3 2h1m7 0h3m1 0h3m-8 1h1m2 0h1m1 0h1m2 0h1M5 14h1m6 0h1m4 0h1m2 0h1m-9 1h1m4 0h3M5 16h1m6 0h1m2 0h1m1 0h1m-5 1h2m2 0h1M5 18h1m1 0h1m-3 2h1m1 0h1m-3 2h1m1 0h1m1 0h1" /><path stroke="gray" d="M6 4h1m1 0h1m1 0h1m1 0h1m1 0h1M6 6h1m1 0h1m1 0h1m1 0h3m8 0h1m-1 1h2M6 8h1m1 0h1m1 0h1m12 0h2m-2 1h2M6 10h1m1 0h1m14 0h2m-2 1h2M6 12h2m4 0h1m7 0h1m3 0h1m-1 1h1M6 14h2m16 0h2m-6 1h1m3 0h2M6 16h2m16 0h2m-14 1h1m2 0h1m8 0h2M6 18h1m1 0h1m15 0h2M8 19h1m15 0h2M6 20h1m1 0h2m14 0h2m-16 1h1m14 0h1M6 22h1m1 0h1m1 0h3m0 1h9m-1 1h2m0 1h1m-1 1h2m-2 1h3M2 28h25M2 29h23m1 0h2m2 0h2m-5 1h5m-4 1h3" /><path stroke="red" d="M13 7h6m-8 1h10M10 9h4m4 0h4M9 10h3m8 0h3M9 11h2m10 0h2M8 12h3m10 0h3M8 13h2m12 0h2M8 14h2m12 0h2M8 15h2m12 0h2M8 16h2m12 0h2M8 17h3m10 0h3M9 18h2m10 0h3M9 19h3m8 0h4m-14 1h4m4 0h6m-13 1h14m-12 1h13m-4 1h5m-4 1h5m-4 1h5m-4 1h5m-4 1h5m-4 1h4m-3 1h2" /><path stroke="silver" d="M19 7h3m-8 2h4m-6 1h2m4 0h2m-9 1h2m1 0h4m1 0h2m-10 1h1m4 0h1m-7 1h2m1 0h2m1 0h1m1 0h2m1 0h1m-12 1h2m1 0h4m1 0h2m1 0h1m-12 1h2m1 0h4m4 0h1m-12 1h2m1 0h2m1 0h1m1 0h4m-11 1h1m4 0h1m1 0h1m1 0h1m-10 1h2m1 0h4m1 0h2m-9 1h2m4 0h2m-6 1h4" /></svg>;

export const moricons91Data = {
  '32x32_4': Moricons91_32x32_4
};

export interface Moricons91Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons91Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons91Props) => {
  const Svg = moricons91Data[variant];

  return <Svg {...rest} />;
};

export const Moricons91 = React.memo(Moricons91Component);
Moricons91.displayName = 'Moricons91';
