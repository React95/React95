import React from 'react';
import type { SVGProps } from "react";

const Shell3210_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="gray" d="M4 6h26M3 7h1m25 0h1M2 8h1m25 0h2M1 9h1m25 0h3M1 10h1m25 0h3M1 11h1m25 0h3M1 12h1m25 0h3M1 13h1m2 0h21m2 0h3M1 14h1m25 0h3M1 15h1m2 0h21m2 0h3M1 16h1m25 0h3M1 17h1m25 0h2M1 18h27m-13 2h1m-2 1h1m-1 1h1M0 23h1m1 0h10m7 0h11m1 0h1" /><path stroke="silver" d="M4 7h25M3 8h25M3 10h19m3 0h2M3 11h19m3 0h2M3 12h24M3 13h1m21 0h2M3 14h1m21 0h2M3 15h1m21 0h2M3 16h1m21 0h2M3 17h24" /><path stroke="#000" d="M30 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 19h26m-14 1h1m1 0h1m-1 1h1m-1 1h1m1 1h1m-1 1h1M0 25h1m1 0h10m6 0h12m1 0h1m-20 1h7" /><path stroke="#fff" d="M2 9h25M2 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h21M2 15h1m-1 1h1m1 0h21M2 17h1m12 4h1m-1 1h1M0 24h1m1 0h10m2 0h1m4 0h11m1 0h1m-18 1h1" /><path stroke="#0f0" d="M22 10h3" /><path stroke="green" d="M22 11h3" /><path stroke="olive" d="M12 23h6m-6 1h1m3 0h2m-6 1h1m3 0h2" /><path stroke="#ff0" d="M13 24h1m1 0h1m-3 1h1m1 0h1" /></svg>;
const Shell3210_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="gray" d="M2 2h13M1 3h1m12 0h1M0 4h1m12 0h2M0 5h1m12 0h2M0 6h1m12 0h2M0 7h1m1 0h10m1 0h2M0 8h1m12 0h1" /><path stroke="silver" d="M2 3h12M1 5h10M1 6h12M1 7h1m10 0h1M1 8h1m10 0h1m-6 3h1m-8 1h6m4 0h6" /><path stroke="#000" d="M15 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M1 9h13m-7 1h2m-1 1h1m0 1h1M0 13h6m3 0h7M6 14h4" /><path stroke="#fff" d="M1 4h12M2 8h10m-5 5h1" /><path stroke="green" d="M11 5h1" /><path stroke="#0f0" d="M12 5h1" /><path stroke="olive" d="M6 12h3m-1 1h1" /><path stroke="#ff0" d="M6 13h1" /></svg>;

export const shell3210Data = {
  '32x32_4': Shell3210_32x32_4,
  '16x16_4': Shell3210_16x16_4
};

export interface Shell3210Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell3210: React.FC<Shell3210Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shell3210Data[variant];

  return <Svg {...rest} />;
};
