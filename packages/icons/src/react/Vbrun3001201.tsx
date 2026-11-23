import React from 'react';
import type { SVGProps } from "react";

const Vbrun3001201_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M5 6h1M5 7h5M5 8h1m4 0h4M5 9h5m4 0h4M5 10h1m4 0h4m4 0h5M5 11h1m8 0h4m4 0h1M5 12h1m12 0h5M5 13h1m16 0h1M5 14h1m16 0h1M5 15h1m16 0h1M5 16h1m16 0h1M5 17h1m16 0h1M5 18h1m16 0h1M5 19h1m16 0h1M5 20h1m16 0h1M5 21h1m16 0h3M5 22h1m16 0h5M5 23h5m12 0h7m-19 1h4m8 0h5m-13 1h4m4 0h3m-7 1h5" /><path stroke="#fff" d="M6 8h4m0 1h4m-8 1h4m4 0h4M6 11h8m4 0h4M6 12h12M6 13h16M6 14h16M6 15h16M6 16h16M6 17h16M6 18h16M6 19h16M6 20h16M6 21h16M6 22h16m-12 1h12m-8 1h8m-4 1h4" /></svg>;
const Vbrun3001201_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M5 6h1M5 7h5M5 8h1m4 0h4M5 9h5m4 0h4M5 10h1m4 0h4m4 0h5M5 11h1m8 0h4m4 0h1M5 12h1m12 0h5M5 13h1m16 0h1M5 14h1m16 0h1M5 15h1m16 0h1M5 16h1m16 0h1M5 17h1m16 0h1M5 18h1m16 0h1M5 19h1m16 0h1M5 20h1m16 0h1M5 21h1m16 0h1M5 22h1m16 0h1M5 23h4m13 0h1M9 24h5m8 0h1m-9 1h4m4 0h1m-5 1h5" /><path stroke="#0ff" d="M6 8h4m0 1h4m0 1h4m0 1h4" /><path stroke="silver" d="M6 10h4m0 1h4m0 1h4m0 1h4M9 23h1m4 1h1m3 1h1" /><path stroke="#fff" d="M6 11h4m-4 1h8m-8 1h12M6 14h16M6 15h16M6 16h16M6 17h16M6 18h16M6 19h16M6 20h16M6 21h16M6 22h16m-12 1h12m-7 1h7m-3 1h3" /><path stroke="gray" d="M23 21h2m-2 1h4m-4 1h6m-6 1h4m-4 1h2" /></svg>;

export const vbrun3001201Data = {
  '32x32_1': Vbrun3001201_32x32_1,
  '32x32_4': Vbrun3001201_32x32_4
};

export interface Vbrun3001201Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

const Vbrun3001201Component = ({
  variant = '32x32_1',
  ...rest
}: Vbrun3001201Props) => {
  const Svg = vbrun3001201Data[variant];

  return <Svg {...rest} />;
};

export const Vbrun3001201 = React.memo(Vbrun3001201Component);
Vbrun3001201.displayName = 'Vbrun3001201';
