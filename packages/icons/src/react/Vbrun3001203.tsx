import React from 'react';
import type { SVGProps } from "react";

const Vbrun3001203_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M7 5h1m0 1h1m1 0h1M7 7h1m4 0h1m1 0h1M8 8h1m1 0h1m5 0h1m1 0h1M7 9h1m4 0h1m1 0h1m5 0h1m1 0h1m1 0h1m-9 1h1m1 0h1M7 11h1m12 0h1m1 0h1m1 0h1M7 13h1m16 0h1M4 15h1m2 0h1m16 0h1M4 16h4m-4 1h1m2 0h4m13 0h1M4 18h3m3 0h4M4 19h1m2 0h3m3 0h1m10 0h1M4 20h1m5 0h4m11 0h1M4 21h1m8 0h1m10 0h1m1 0h1m1 0h1M4 22h1m8 0h1m11 0h1m1 0h1m1 0h1M4 23h1m8 0h3m8 0h1m1 0h1m1 0h1M4 24h1m8 0h6m6 0h1m1 0h1M4 25h3m6 0h5m2 0h1m1 0h1m1 0h1M7 26h3m3 0h3m-6 1h4" /><path stroke="#fff" d="M8 5h1M7 6h1m1 0h1m1 0h1M8 7h4m1 0h1m1 0h1M7 8h1m1 0h1m1 0h5m1 0h1m1 0h1M8 9h4m1 0h1m1 0h5m1 0h1m1 0h1M7 10h9m1 0h1m1 0h6M8 11h12m1 0h1m1 0h1M7 12h18M8 13h16M7 14h18M8 15h16M8 16h17M5 17h2m4 0h13M7 18h3m4 0h11M5 19h2m3 0h3m1 0h10M5 20h5m4 0h11m1 0h1M5 21h8m1 0h10m1 0h1m1 0h1M5 22h8m1 0h11m1 0h1m1 0h1m1 0h1M5 23h8m3 0h8m1 0h1m1 0h1m1 0h1M5 24h8m6 0h6m1 0h1M7 25h6m5 0h2m1 0h1m1 0h1m1 0h1m-16 1h3" /></svg>;
const Vbrun3001203_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="silver" d="M7 5h1M7 6h5M7 7h1m4 0h4M7 8h1m1 0h1m1 0h1m4 0h4M7 9h5m1 0h1m1 0h1m4 0h5M7 10h1m4 0h4m1 0h1m1 0h1m4 0h1M7 11h1m8 0h4m1 0h1m1 0h2M7 12h1m12 0h5M7 13h1m16 0h1M7 14h1m16 0h1M7 15h1m16 0h1m-1 1h1m-1 1h1m-1 1h1M5 19h2m17 0h1M7 20h3m4 0h2m8 0h1m-15 1h3m1 0h4m6 0h1m-11 1h4m6 0h1m-11 1h4m6 0h1m-9 1h5m3 0h1M7 25h1m12 0h5m-15 1h1" /><path stroke="#0ff" d="M8 7h4m0 1h4m0 1h4m0 1h4M5 17h2m0 1h3m0 1h3" /><path stroke="gray" d="M8 8h1m1 0h1m1 1h1m1 0h1m1 1h1m1 0h1m1 1h1m1 0h1m2 9h2m-2 1h4m-4 1h6m-6 1h4m-15 1h2m9 0h2m-13 1h4m-4 1h2" /><path stroke="#fff" d="M8 10h4m-4 1h8m-8 1h12M8 13h16M8 14h16M8 15h16M8 16h16m-13 1h13m-10 1h10m-10 1h10M5 20h2m9 0h8M5 21h5m8 0h6M5 22h8m5 0h6M5 23h8m5 0h6M5 24h8m8 0h3M8 25h5m-2 1h2" /><path stroke="#000" d="M4 15h1m-1 1h4m-4 1h1m2 0h4m-7 1h3m3 0h4M4 19h1m2 0h3m3 0h1M4 20h1m5 0h4M4 21h1m8 0h1M4 22h1m8 0h1M4 23h1m8 0h1M4 24h1m8 0h1M4 25h3m6 0h1m-7 1h3m3 0h1m-4 1h4" /></svg>;

export const vbrun3001203Data = {
  '32x32_1': Vbrun3001203_32x32_1,
  '32x32_4': Vbrun3001203_32x32_4
};

export interface Vbrun3001203Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

const Vbrun3001203Component = ({
  variant = '32x32_1',
  ...rest
}: Vbrun3001203Props) => {
  const Svg = vbrun3001203Data[variant];

  return <Svg {...rest} />;
};

export const Vbrun3001203 = React.memo(Vbrun3001203Component);
Vbrun3001203.displayName = 'Vbrun3001203';
