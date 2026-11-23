import React from 'react';
import type { SVGProps } from "react";

const Vbrun3001202_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M7 5h1M7 6h5M7 7h1m4 0h4M7 8h5m4 0h4M7 9h1m4 0h4m4 0h5M7 10h1m8 0h4m4 0h1M7 11h1m12 0h5M7 12h1m16 0h1M7 13h1m16 0h1M7 14h1m16 0h1M7 15h1m16 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-6 1h1m4 0h1m-5 1h5" /><path stroke="#0ff" d="M8 7h4m0 1h4m0 1h4m0 1h4M5 17h2m0 1h3m0 1h3" /><path stroke="silver" d="M8 9h4m0 1h4m0 1h4m0 1h4M4 15h1m-1 1h4m-4 1h1m2 0h4m-7 1h1m1 0h1m3 0h4M4 19h3m1 0h1m4 0h1M4 20h1m2 0h4m1 0h4M4 21h1m5 0h8M4 22h1m8 0h5M4 23h1m8 0h1m2 0h2M4 24h1m8 0h2m5 0h1M4 25h4m5 0h1m1 0h1m1 0h1M7 26h4m2 0h2m-5 1h4" /><path stroke="#fff" d="M8 10h4m-4 1h8m-8 1h12M8 13h16M8 14h16M8 15h16M8 16h16m-13 1h13m-10 1h10m-10 1h10M5 20h2m9 0h8M5 21h5m8 0h6M5 22h8m5 0h6M5 23h8m5 0h6M5 24h8m8 0h3M8 25h5m-2 1h2" /><path stroke="gray" d="M5 18h1m1 1h1m1 0h1m1 1h1m13 0h2m-2 1h4m-4 1h6m-17 1h2m9 0h4m-14 1h3m7 0h2m-13 1h1m1 0h1m-2 1h1" /></svg>;
const Vbrun3001202_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M7 5h1M7 6h5M7 7h1m4 0h4M7 8h5m4 0h4M7 9h1m4 0h4m4 0h5M7 10h1m8 0h4m4 0h1M7 11h1m12 0h5M7 12h1m16 0h1M7 13h1m16 0h1M7 14h1m16 0h1M4 15h1m2 0h1m16 0h1M5 16h1m1 0h1m16 0h1M4 17h1m3 0h1m1 0h1m13 0h1M5 18h1m5 0h1m1 0h1m10 0h1M4 19h1m2 0h1m1 0h1m14 0h1m-14 1h1m1 0h1m10 0h3M4 21h1m19 0h5m-16 1h1m10 0h7M4 23h1m9 0h1m9 0h5m-16 1h1m1 0h5m4 0h3M4 25h1m1 0h1m7 0h1m1 0h1m3 0h5M7 26h1m1 0h1m3 0h1m1 0h1m-6 1h1m1 0h1" /><path stroke="#fff" d="M8 7h4m0 1h4M8 9h4m4 0h4M8 10h8m4 0h4M8 11h12M8 12h16M8 13h16M8 14h16M5 15h1m2 0h16M4 16h1m1 0h1m1 0h16M5 17h3m1 0h1m1 0h13M4 18h1m1 0h5m1 0h1m1 0h10M5 19h2m1 0h1m1 0h14M4 20h7m1 0h1m1 0h10M5 21h19M4 22h9m1 0h10M5 23h9m1 0h9M4 24h9m1 0h1m5 0h4M5 25h1m1 0h7m1 0h1M6 26h1m1 0h1m1 0h3m1 0h1m-6 1h1m1 0h1m1 0h1" /></svg>;

export const vbrun3001202Data = {
  '32x32_4': Vbrun3001202_32x32_4,
  '32x32_1': Vbrun3001202_32x32_1
};

export interface Vbrun3001202Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '32x32_1';
}

const Vbrun3001202Component = ({
  variant = '32x32_4',
  ...rest
}: Vbrun3001202Props) => {
  const Svg = vbrun3001202Data[variant];

  return <Svg {...rest} />;
};

export const Vbrun3001202 = React.memo(Vbrun3001202Component);
Vbrun3001202.displayName = 'Vbrun3001202';
