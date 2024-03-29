import React from 'react';
import type { SVGProps } from "react";

const Mdisp321_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M15 1h4m-5 1h1m4 0h1m-6 1h8m-9 1h4m2 0h1m-7 1h3m3 0h1m-6 1h1m3 0h1m-5 1h1m3 0h1m-7 1h3m4 0h3M11 9h1m10 0h1m3 0h2m-17 1h1m11 0h1m1 0h1m2 0h1m-18 1h1m1 0h1m10 0h1m3 0h1m-19 1h1m2 0h1m7 0h1m1 0h1m3 0h1m-18 1h1m2 0h1m7 0h1m1 0h1m2 0h1m-6 1h2m1 0h3m-6 1h2m3 0h1m-6 1h1m1 0h1m1 0h2m-4 1h2" /><path stroke="#fff" d="M15 2h4m-5 7h1m5 0h1m-7 1h1m5 0h1m-7 1h6m-6 1h6m-6 1h5m-5 1h1" /><path stroke="gray" d="M17 4h2m-4 3h2M0 14h4m1 0h4m1 0h4m1 0h4M0 15h1m3 0h1m4 0h1m4 0h1m4 0h1M0 16h1m3 0h1m4 0h1m4 0h1m4 0h1M0 17h22M0 18h2m4 0h1m4 0h1m4 0h1m4 0h1M0 19h2m4 0h1m4 0h1m4 0h1m4 0h1M0 20h29M0 21h1m3 0h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M0 22h1m3 0h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M0 23h32M0 24h2m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M0 25h2m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M0 26h32M0 27h1m3 0h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m1 0h1M0 28h1m3 0h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1m1 0h1M0 29h1m2 0h8m2 0h13m1 0h5" /><path stroke="silver" d="M16 5h3m-4 1h3m-1 1h1m2 4h1m-1 1h1m-2 1h2m-2 1h2m-1 1h1m-1 1h1" /><path stroke="navy" d="M15 8h4m-7 1h2m1 0h5m1 0h1m-10 1h2m1 0h5m1 0h2m-11 1h1m8 0h3m-13 1h2m9 0h1m-12 1h2m9 0h1m0 1h1m-1 1h3m-2 1h1" /><path stroke="red" d="M26 10h2m-3 1h2m-3 1h2m-2 1h1M1 15h3m1 0h4m1 0h4m1 0h4M1 16h2m2 0h3m2 0h3m2 0h3M2 18h4m1 0h4m1 0h4m1 0h4M2 19h3m2 0h3m2 0h3m2 0h3M1 21h3m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4M1 22h2m2 0h3m2 0h3m2 0h3m2 0h3m2 0h3M2 24h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4M2 25h3m2 0h3m2 0h3m2 0h3m2 0h3m2 0h3M1 27h3m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h1M2 28h1m2 0h3m3 0h2m2 0h3m2 0h3m2 0h1m1 0h1m2 0h1" /><path stroke="maroon" d="M27 11h1m-2 1h1m-2 1h1M3 16h1m4 0h1m4 0h1m4 0h1M5 19h1m4 0h1m4 0h1m4 0h1M3 22h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M5 25h1m4 0h1m4 0h1m4 0h1m4 0h1m4 0h1M3 28h1m4 0h1m9 0h1m4 0h1m4 0h1" /><path stroke="green" d="M1 28h1m8 0h1m2 0h1m12 0h1M1 29h2m8 0h2m13 0h1M0 30h32M0 31h32" /></svg>;

export const mdisp321Data = {
  '32x32_4': Mdisp321_32x32_4
};

export interface Mdisp321Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mdisp321: React.FC<Mdisp321Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mdisp321Data[variant];

  return <Svg {...rest} />;
};
