import React from 'react';
import type { SVGProps } from "react";

const Drvspace8_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="red" d="M11 4h8M9 5h12M8 6h4m6 0h4M7 7h3m10 0h3M6 8h3m12 0h3M5 9h4m13 0h3M4 10h6m13 0h3M4 11h2m1 0h4m13 0h2M4 12h2m2 0h4m12 0h2M3 13h2m4 0h4m12 0h2M3 14h2m5 0h4m11 0h2M3 15h2m6 0h4m10 0h2M3 16h2m7 0h4m9 0h2M3 17h2m8 0h4m8 0h2M3 18h2m9 0h4m7 0h2M3 19h2m10 0h4m6 0h2M4 20h2m10 0h4m4 0h2M4 21h2m11 0h4m3 0h2M4 22h3m11 0h4m1 0h3M5 23h3m11 0h6M6 24h3m11 0h4M7 25h3m9 0h4M8 26h4m6 0h4M9 27h11m-9 1h8" /><path stroke="gray" d="M10 10h13m3 0h4M3 11h1m25 0h1M2 12h1m25 0h2M1 13h1m25 0h3M1 14h1m25 0h3M1 15h1m25 0h3M1 16h1m25 0h3M1 17h1m3 0h8m4 0h8m2 0h3M1 18h1m25 0h3M1 19h1m3 0h10m4 0h6m2 0h3M1 20h1m25 0h3M1 21h1m25 0h2M1 22h3m3 0h11m4 0h1m3 0h2" /><path stroke="silver" d="M6 11h1m4 0h13m2 0h3M3 12h1m2 0h2m4 0h12m2 0h2M5 14h5m4 0h8M5 15h6m4 0h7M5 16h7m4 0h9M3 20h1m22 0h1M3 21h1m2 0h11m4 0h3m2 0h1" /><path stroke="#000" d="M30 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 23h3m3 0h11m6 0h3" /><path stroke="#fff" d="M2 13h1m2 0h4m4 0h12M2 14h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m2 0h9m4 0h7M2 19h1m-1 1h1m3 0h10m4 0h4M2 21h1" /><path stroke="green" d="M22 14h3m-3 1h3" /></svg>;
const Drvspace8_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="red" d="M5 1h6M4 2h1m6 0h1M3 3h1m8 0h1M2 4h1m1 0h1m8 0h1M1 5h1m3 0h1m8 0h1M1 6h1m4 0h1m7 0h1M1 7h1m5 0h1m6 0h1M1 8h1m6 0h1m5 0h1M1 9h1m7 0h1m4 0h1M1 10h1m8 0h1m3 0h1M2 11h1m8 0h1m1 0h1M3 12h1m8 0h1m-9 1h1m6 0h1m-7 1h6" /><path stroke="gray" d="M2 5h3m1 0h8M0 7h1m12 0h1M0 8h1m12 0h1M0 9h1m12 0h1M0 10h1m1 0h8m1 0h1m1 0h1M0 11h1m13 0h1M0 12h3m1 0h8m1 0h1" /><path stroke="silver" d="M2 6h4m1 0h7M2 8h6m1 0h1m2 0h1M2 9h7m1 0h3m-1 1h1M1 11h1m10 0h1" /><path stroke="#000" d="M15 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M1 13h3m1 0h6m1 0h2" /><path stroke="#fff" d="M2 7h5m1 0h5M3 11h8" /><path stroke="green" d="M10 8h2" /></svg>;

export const drvspace8Data = {
  '32x32_4': Drvspace8_32x32_4,
  '16x16_4': Drvspace8_16x16_4
};

export interface Drvspace8Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Drvspace8: React.FC<Drvspace8Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = drvspace8Data[variant];

  return <Svg {...rest} />;
};
