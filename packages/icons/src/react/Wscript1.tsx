import React from 'react';
import type { SVGProps } from "react";

const Wscript1_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#ff0" d="M5 0h2M4 1h2M2 2h4M2 3h6M4 4h3M3 5h2m1 0h2M2 6h2m22 10h1m1 0h2m-4 1h1m1 0h1m-3 1h3m-5 1h5m-2 1h1" /><path stroke="#000" d="M7 0h3M6 1h1m3 0h1m0 1h1m-1 1h1m-1 1h1m-2 1h1M7 6h3M8 7h1M8 8h1M8 9h1m-1 1h1m-1 1h16M7 12h2m13 0h2M6 13h1m1 0h1m12 0h1m1 0h1M5 14h1m14 0h1m2 0h1M4 15h1m14 0h1m3 0h1M3 16h16m4 0h1M3 17h1m14 0h1m4 0h1M3 18h1m14 0h1m4 0h1m5 0h1M3 19h1m14 0h1m4 0h1m6 0h1M3 20h1m14 0h1m4 0h1m1 0h1m5 0h1M3 21h1m14 0h1m1 0h6m5 0h1M3 22h1m14 0h1m4 0h1m1 0h1m5 0h1M3 23h1m14 0h1m4 0h1m2 0h1m3 0h1M3 24h1m14 0h1m3 0h1m5 0h2M3 25h1m14 0h1m2 0h1M3 26h1m14 0h1m1 0h1M3 27h1m14 0h2M3 28h16" /><path stroke="#fff" d="M7 1h3M6 2h5M8 3h3M7 4h4M8 5h2m19 14h1m-4 1h1m1 0h3m-5 1h5m-5 1h5m-4 1h3" /><path stroke="#00f" d="M9 12h13M7 13h1m1 0h12M6 14h14M5 15h14" /><path stroke="#0f0" d="M22 13h1m-2 1h2m-3 1h3m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h1m-1 1h4m-4 1h4m-4 1h3m-3 1h2m-2 1h1" /><path stroke="red" d="M4 17h14M4 18h14M4 19h14M4 20h14M4 21h14M4 22h14M4 23h14M4 24h14M4 25h14M4 26h14M4 27h14" /></svg>;
const Wscript1_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#ff0" d="M2 0h1M1 1h3M1 2h1m1 0h1m8 7h2" /><path stroke="#fff" d="M3 0h2M4 1h1M4 2h1m9 7h1m-2 1h2m-2 1h2" /><path stroke="#000" d="M5 1h1M4 5h8m-2 1h2M9 7h1m1 0h1M1 8h1m9 0h1M1 9h1m9 0h1M1 10h1m8 0h3m2 0h1M1 11h1m9 0h1M1 12h1m8 0h1M1 13h1m7 0h1" /><path stroke="#00f" d="M3 6h7M2 7h7" /><path stroke="#0f0" d="M10 7h1M9 8h2M9 9h2m-2 1h1m-1 1h2m-2 1h1" /><path stroke="red" d="M2 8h7M2 9h7m-7 1h7m-7 1h7m-7 1h7m-7 1h7" /></svg>;

export const wscript1Data = {
  '32x32_4': Wscript1_32x32_4,
  '16x16_4': Wscript1_16x16_4
};

export interface Wscript1Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Wscript1Component = ({
  variant = '32x32_4',
  ...rest
}: Wscript1Props) => {
  const Svg = wscript1Data[variant];

  return <Svg {...rest} />;
};

export const Wscript1 = React.memo(Wscript1Component);
Wscript1.displayName = 'Wscript1';
