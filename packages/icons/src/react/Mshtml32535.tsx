import React from 'react';
import type { SVGProps } from "react";

const Mshtml32535_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M7 4h20M5 5h2m20 0h1M3 6h2m22 0h1M1 7h2m24 0h1M0 8h23m4 0h1M0 9h1m22 0h1m3 0h1M0 10h1m22 0h1m3 0h1M0 11h1m22 0h1m3 0h1M0 12h1m22 0h1m3 0h1M0 13h1m22 0h1m3 0h1M0 14h1m22 0h1m3 0h1M0 15h1m10 0h13m2 0h1M0 16h1m6 0h4m13 0h4M0 17h1m4 0h2m21 0h2M1 18h4m25 0h1M3 19h1m27 0h1M3 20h2m25 0h2M3 21h1m1 0h2m21 0h2m1 0h1M3 22h1m3 0h4m13 0h4m3 0h1M3 23h1m7 0h13m7 0h1M4 24h1m25 0h1M5 25h2m21 0h2M7 26h4m13 0h4m-17 1h13" /><path stroke="silver" d="M7 5h19M5 6h20M3 7h21M2 10h21M2 11h21M2 12h1m18 0h2M2 13h21M2 14h1m18 0h2M2 15h1m1 0h7m-9 1h1m1 0h3" /><path stroke="gray" d="M26 5h1m-2 1h2m-3 1h3m-4 1h4m-3 1h3m-3 1h3m-3 1h3M3 12h18m3 0h3m-3 1h3M3 14h18m3 0h3m-3 1h2M1 17h4" /><path stroke="#fff" d="M1 9h22M1 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m10 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 19h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M6 20h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M7 21h1m9 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1" /><path stroke="#0f0" d="M3 15h1m-1 1h1" /><path stroke="#0ff" d="M11 16h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M8 17h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 18h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 19h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 20h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 21h1m11 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M4 22h3m8 0h1m1 0h1m1 0h1m1 0h1m1 0h1m4 0h3M4 23h3m17 0h7M5 24h2m7 0h16m-16 1h14m-14 1h10" /><path stroke="#00f" d="M15 19h3m-7 1h6m-9 1h8m-5 1h4m-8 1h4m-4 1h7m-7 1h7m-3 1h3" /></svg>;

export const mshtml32535Data = {
  '32x32_4': Mshtml32535_32x32_4
};

export interface Mshtml32535Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mshtml32535: React.FC<Mshtml32535Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mshtml32535Data[variant];

  return <Svg {...rest} />;
};
