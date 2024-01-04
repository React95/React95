import React from 'react';
import type { SVGProps } from "react";

const Shell3229_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="navy" d="M0 21h8m-8 3h8m-8 1h8m-8 1h8m-8 1h8m-8 1h8m-8 1h8" /><path stroke="#00f" d="M0 22h8m-8 1h8" /><path stroke="#000" d="M8 22h1m-1 1h1m-1 1h1m-1 1h1m11 0h2M8 26h1m7 0h1m5 0h1M8 27h1m8 0h6M8 28h3m10 0h6M8 29h1m2 0h1m14 0h1M0 30h8m4 0h2m10 0h2m-12 1h10" /><path stroke="gray" d="M9 23h9m0 1h2m-2 4h3m4 1h1m-12 1h10" /><path stroke="silver" d="M9 24h1m-1 1h1m-1 1h1m-1 1h3m-1 1h3m-2 1h4m8 0h1" /><path stroke="#fff" d="M10 24h8m-8 1h10m-10 1h6m1 0h5m-10 1h5m-3 1h4m-2 1h8" /></svg>;
const Shell3229_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="navy" d="M0 9h4m-4 2h4m-4 1h4m-4 1h4" /><path stroke="#00f" d="M0 10h4" /><path stroke="#000" d="M4 10h1m-1 1h1m4 0h1m-6 1h1m3 0h1m1 0h1m-7 1h2m3 0h4M0 14h5m1 0h1m5 0h1m-6 1h5" /><path stroke="gray" d="M5 10h4m2 4h1" /><path stroke="silver" d="M5 11h1m-1 1h1m3 0h1m-4 1h1m0 1h4" /><path stroke="#fff" d="M6 11h3m-3 1h2m-1 1h2" /></svg>;

export const shell3229Data = {
  '32x32_4': Shell3229_32x32_4,
  '16x16_4': Shell3229_16x16_4
};

export interface Shell3229Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell3229: React.FC<Shell3229Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shell3229Data[variant];

  return <Svg {...rest} />;
};
