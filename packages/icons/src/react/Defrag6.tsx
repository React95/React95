import React from 'react';
import type { SVGProps } from "react";

const Defrag6_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M7 6h23M6 7h1m22 0h1M5 8h1m22 0h2M4 9h1m22 0h3M4 10h1m22 0h3M4 11h1m22 0h3M4 12h1m22 0h3M4 13h1m2 0h18m2 0h3M3 14h2m22 0h3M2 15h1m1 0h1m2 0h18m2 0h3M1 16h1m2 0h1m22 0h3M1 17h1m2 0h1m22 0h2M1 18h1m2 0h24M1 19h1m-1 1h1m2 0h18m2 0h3M1 21h1m22 0h3M1 22h1m2 0h18m2 0h3M1 23h1m22 0h3M1 24h1m22 0h2M1 25h24" /><path stroke="silver" d="M7 7h22M6 8h22M6 10h16m3 0h2M6 11h16m3 0h2M6 12h21M6 13h1m18 0h2M6 14h1m18 0h2M3 15h1m2 0h1m18 0h2M6 16h1m18 0h2M3 17h1m2 0h21M3 18h1m-1 1h2m-2 1h1m18 0h2M3 21h1m18 0h2M3 22h1m18 0h2M3 23h1m18 0h2M3 24h21" /><path stroke="#000" d="M30 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M5 19h23m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 26h23" /><path stroke="#fff" d="M5 9h22M5 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h18M5 15h1m-4 1h2m1 0h1m1 0h18M2 17h1m2 0h1m-4 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h18M2 22h1m-1 1h1m1 0h18M2 24h1" /><path stroke="green" d="M22 10h3m-3 1h3" /></svg>;
const Defrag6_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 2h1m10 0h1M2 3h1m10 0h2M2 4h1m10 0h2M2 5h1m10 0h2M2 6h1m1 0h8m1 0h2M1 7h2m10 0h2M0 8h1m1 0h12M0 9h1m-1 1h1m10 0h2M0 11h1m2 0h7m1 0h2M0 12h1m10 0h2M0 13h12" /><path stroke="silver" d="M4 2h10M3 4h7m2 0h1M3 5h10M3 6h1m8 0h1M3 7h1m8 0h1M1 9h2m-2 1h10M1 11h2m7 0h1M1 12h1m8 0h1" /><path stroke="#000" d="M15 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M3 9h11m-1 1h1m-1 1h1m-1 1h1m-2 1h1M1 14h11" /><path stroke="#fff" d="M3 3h10M4 7h8M1 8h1m0 4h8" /><path stroke="green" d="M10 4h2" /></svg>;

export const defrag6Data = {
  '32x32_4': Defrag6_32x32_4,
  '16x16_4': Defrag6_16x16_4
};

export interface Defrag6Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag6: React.FC<Defrag6Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = defrag6Data[variant];

  return <Svg {...rest} />;
};
