import React from 'react';
import type { SVGProps } from "react";

const Inetcpl1304_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="gray" d="M2 1h17M2 2h17M2 3h3m4 0h4m3 0h3M2 4h3m4 0h4m3 0h3M2 5h2m5 0h4m4 0h2M2 6h2m5 0h4m4 0h2M2 7h2m5 0h4m4 0h2M9 8h1M9 9h1m-1 1h1m-1 1h1m-1 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-8 1h11M5 20h11" /><path stroke="silver" d="M5 3h4m4 0h3m3 0h2M5 4h4m4 0h3m3 0h2M4 5h2m7 0h2m4 0h2M4 6h2m7 0h2m4 0h2M4 7h2m7 0h2m4 0h2M4 8h2M4 9h2m7 1h5m4 0h4m3 0h2m-18 1h5m4 0h4m3 0h2m-18 1h2m7 0h2m5 0h2m-18 1h2m7 0h2m5 0h2m-18 1h2m7 0h2m5 0h2m-18 1h2m7 0h2m5 0h2m-18 1h2m7 0h2m5 0h2m-18 1h2m7 0h2m-11 1h2m7 0h2m-2 1h2m-2 1h2M6 21h12m4 0h2M6 22h12m4 0h2m-2 1h2m-2 1h2m-2 1h2m-8 3h11m-11 1h11" /><path stroke="#00f" d="M10 8h19M10 9h19m-19 1h3m5 0h4m4 0h3m-19 1h3m5 0h4m4 0h3m-19 1h2m6 0h4m5 0h2m-19 1h2m6 0h4m5 0h2m-19 1h2m6 0h4m5 0h2m-11 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-8 1h11m-11 1h11" /></svg>;
const Inetcpl1304_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="gray" d="M1 0h10M1 1h1m9 0h1M1 2h1m10 0h1M1 3h1M1 4h1m1 0h5M1 5h1m1 0h1m1 0h1m1 0h1M1 6h1m3 0h1M1 7h1m3 0h1M1 8h1m3 0h1M1 9h1m2 0h3m-6 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M2 1h8M2 2h8m1 0h1M2 3h8M2 4h1m5 0h4M2 5h1m6 0h3M2 6h2m7 0h1M2 7h3M2 8h3m1 0h1m3 0h1M2 9h2m3 0h1m2 0h2M2 10h6m2 0h2M2 11h5m3 0h2M2 12h6m3 0h1M2 13h10" /><path stroke="silver" d="M10 1h1m-1 1h1m1 2h1M4 5h1m1 0h1m1 0h1m3 0h1M4 6h1m7 0h1M7 7h1m1 0h1m1 0h2M7 8h1m1 0h1m1 0h2M9 9h1m2 0h1m-4 1h1m2 0h1m-1 1h1m-5 1h3m1 0h1m-1 1h1M2 14h11" /><path stroke="#000" d="M10 3h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 15h13" /><path stroke="#00f" d="M6 6h5M6 7h1m1 0h1m1 0h1M8 8h1M8 9h1m-1 1h1m-2 1h3" /></svg>;

export const inetcpl1304Data = {
  '32x32_4': Inetcpl1304_32x32_4,
  '16x16_4': Inetcpl1304_16x16_4
};

export interface Inetcpl1304Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Inetcpl1304: React.FC<Inetcpl1304Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcpl1304Data[variant];

  return <Svg {...rest} />;
};
