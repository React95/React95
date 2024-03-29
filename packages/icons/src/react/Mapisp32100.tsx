import React from 'react';
import type { SVGProps } from "react";

const Mapisp32100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#fff" d="M0 0h32M0 1h1m1 0h3m1 0h1m1 0h19m1 0h1m1 0h2M0 2h1m2 0h1m2 0h20m1 0h2m1 0h2M0 3h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1m2 0h1m2 0h1m2 0h2m8 0h1M0 4h1m1 0h3m1 0h1m1 0h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h2m1 0h2M0 5h1m1 0h3m1 0h1m1 0h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h2m1 0h2M0 6h1m1 0h3m1 0h1m1 0h2m2 0h1m1 0h1m2 0h2m2 0h1m2 0h2m1 0h2m1 0h2M0 7h32M0 9h32M0 11h32M0 13h32M0 15h32M0 17h8m4 0h20M5 18h1m8 0h1M0 19h5m10 0h17M4 20h1m2 0h2m6 0h1M0 21h4m3 0h1m8 0h16M0 23h4m12 0h16M0 25h5m13 0h14M0 27h6m13 0h13M0 29h10m8 0h14M0 31h32" /><path stroke="gray" d="M1 1h1m3 0h1m1 0h1m19 0h1m1 0h1M1 2h2m1 0h2m20 0h1m2 0h1M1 3h1m1 0h1m1 0h1m1 0h1m2 0h2m1 0h2m1 0h2m1 0h2m2 0h8M1 4h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m2 0h1M1 5h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m2 0h1M1 6h1m3 0h1m1 0h1m2 0h2m1 0h1m1 0h2m2 0h2m1 0h2m2 0h1m2 0h1M13 20h1m-1 1h2m-2 1h2m-2 1h2m-3 1h3m-4 1h3m2 0h2M6 26h8m1 0h4M8 27h4m2 0h5m-7 1h7m-9 1h8m-6 1h4" /><path stroke="silver" d="M0 8h32M0 10h32M0 12h32M0 14h32M0 16h32M0 18h5m3 0h4m3 0h17M6 19h8M0 20h4m2 0h1m2 0h4m3 0h16M5 21h2m1 0h5M0 22h4m1 0h8m3 0h16M5 23h8M0 24h4m1 0h7m4 0h16M6 25h5m4 0h1M0 26h5m14 0h13M0 28h8m11 0h13M0 30h12m4 0h16" /><path stroke="#000" d="M8 17h4m-6 1h2m4 0h2m-9 1h1m8 0h1M5 20h1m8 0h1M4 21h1m10 0h1M4 22h1m10 0h1M4 23h1m10 0h1M4 24h1m10 0h1M5 25h1m8 0h1M5 26h1m8 0h1m-9 1h2m4 0h2m-6 1h4" /></svg>;

export const mapisp32100Data = {
  '32x32_4': Mapisp32100_32x32_4
};

export interface Mapisp32100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mapisp32100: React.FC<Mapisp32100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mapisp32100Data[variant];

  return <Svg {...rest} />;
};
