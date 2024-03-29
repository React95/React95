import React from 'react';
import type { SVGProps } from "react";

const Imgedit277_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="silver" d="M0 0h32M0 1h32M0 2h32M0 3h32M0 4h32M0 5h32M0 6h32M0 7h32M0 8h24m1 0h7M0 9h23m3 0h6M0 10h11m3 0h8m3 0h7M0 11h10m1 0h3m1 0h6m3 0h8M0 12h10m1 0h3m1 0h5m3 0h9M0 13h10m1 0h3m1 0h4m3 0h10M0 14h13m1 0h4m3 0h11M0 15h12m1 0h4m3 0h12M0 16h12m1 0h3m3 0h13M0 17h12m1 0h3m2 0h1m5 0h8M0 18h13m3 0h3m5 0h8M0 19h11m1 0h9m1 0h10M0 20h12m1 0h8m1 0h10M0 21h13m1 0h7m1 0h10M0 22h14m1 0h4m5 0h8M0 23h15m1 0h3m5 0h8M0 24h16m1 0h2m5 0h8M0 25h17m1 0h14M0 26h32M0 27h32M0 28h32M0 29h32M0 30h32M0 31h32" /><path stroke="#000" d="M24 8h1m-2 1h1m1 0h1m-15 1h3m8 0h1m1 0h1m-15 1h1m3 0h1m6 0h1m1 0h1m-14 1h1m3 0h1m5 0h1m1 0h1m-13 1h1m3 0h1m4 0h1m1 0h1m-9 1h1m4 0h1m1 0h1m-9 1h1m4 0h1m1 0h1m-8 1h1m3 0h1m1 0h1m-7 1h1m3 0h2m-5 1h3m-5 1h1m0 1h1m0 1h1m0 1h1m4 0h5m-9 1h1m3 0h2m1 0h2m-8 1h1m0 1h1" /><path stroke="purple" d="M24 9h1" /><path stroke="#ff0" d="M23 10h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="gray" d="M19 17h2m1 0h2" /><path stroke="navy" d="M21 17h1m-3 1h5m-3 1h1m-1 1h1m-1 1h1" /><path stroke="maroon" d="M21 23h1m-3 1h1m1 0h1m1 0h1" /><path stroke="red" d="M20 24h1m1 0h1" /></svg>;

export const imgedit277Data = {
  '32x32_4': Imgedit277_32x32_4
};

export interface Imgedit277Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Imgedit277: React.FC<Imgedit277Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = imgedit277Data[variant];

  return <Svg {...rest} />;
};
