import React from 'react';
import type { SVGProps } from "react";

const Wmconfig130_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M29 0h1m-1 1h1m-1 1h2M4 3h20m5 0h1m1 0h1M4 4h20m5 0h1M4 5h20m3 0h3M4 6h8m4 0h8m2 0h4M4 7h6m8 0h6m3 0h2M4 8h5m4 0h2m4 0h5M4 9h4m3 0h6m3 0h4M4 10h3m3 0h3m3 0h2m3 0h3m4 0h1M4 11h3m2 0h3m9 0h3m4 0h1M4 12h2m3 0h2m11 0h2m4 0h2M4 13h2m2 0h2m5 0h1m6 0h2m4 0h1m1 0h1M4 14h2m2 0h2m4 0h2m6 0h2m4 0h1M4 15h2m3 0h1m3 0h2m7 0h2m2 0h3M4 16h3m2 0h1m11 0h3m1 0h4M4 17h3m14 0h3m2 0h2M4 18h4m12 0h4M4 19h5m10 0h5M4 20h6m8 0h6M3 21h9m4 0h8M2 22h1m1 0h20M3 23h21M2 24h1m1 0h20M1 25h1m1 0h21M2 26h1m1 0h20M1 27h1m1 0h21M0 28h1m1 0h1m1 0h20M1 29h1m1 0h21M2 30h1m1 0h20M3 31h21" /><path stroke="silver" d="M3 3h1M2 4h1M1 5h1m1 0h1M0 6h1m1 0h1M1 7h1m1 0h1M0 8h1m1 0h1M1 9h1m-2 1h1m1 0h1m-2 1h1m16 0h1M0 12h1m12 0h2m3 0h1M1 13h1m10 0h2m4 0h2M0 14h1m11 0h1m5 0h2m-2 1h1m-2 1h2m-9 1h1m5 0h2m-7 1h6m-4 1h2" /><path stroke="gray" d="M3 4h1M2 5h1M1 6h1m1 0h1m8 0h4M0 7h1m1 0h1m7 0h8M1 8h1m1 0h1m5 0h4m2 0h4M0 9h1m1 0h2m4 0h3m6 0h3M1 10h1m1 0h1m3 0h3m3 0h3m2 0h3M0 11h1m1 0h2m3 0h2m3 0h6m1 0h2M1 12h3m2 0h3m2 0h2m2 0h3m1 0h3M0 13h1m1 0h2m2 0h2m2 0h2m2 0h1m1 0h2m2 0h2M1 14h3m2 0h2m2 0h2m1 0h1m2 0h2m2 0h2M0 15h4m2 0h3m1 0h3m2 0h3m1 0h3M0 16h4m3 0h2m1 0h7m2 0h2M0 17h4m3 0h3m1 0h5m2 0h3M0 18h4m4 0h3m6 0h3M0 19h4m5 0h4m2 0h4M0 20h4m6 0h8M0 21h3m9 0h4M0 22h2m1 0h1m-4 1h3m-3 1h2m1 0h1m-4 1h1m1 0h1m-3 1h2m1 0h1m-4 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1m0 1h1" /></svg>;
const Wmconfig130_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 0h3M6 1h2m1 0h2M5 2h1m5 0h1M4 3h1m7 0h1M4 4h1m7 0h1M3 5h1m9 0h1M3 6h1m9 0h1M3 7h1m9 0h1M3 8h1m9 0h1M3 9h1m9 0h1M3 10h1m9 0h1M3 11h1m9 0h1M3 12h1m9 0h1M4 13h1m7 0h1m-9 1h1m2 0h1m1 0h1m2 0h1m-8 1h7" /><path stroke="red" d="M7 2h3M7 3h4M8 4h3M9 5h3m-2 1h2m-2 1h2M8 8h2m1 0h1M8 9h4m-4 1h4m-4 1h3m-2 1h2m-3 1h2" /><path stroke="maroon" d="M6 3h1M6 4h2M5 5h4M5 6h5M5 7h2M5 8h1m1 0h1M5 9h3m-3 1h3m-3 1h3m3 0h1m-7 1h4m2 0h1m-6 1h2m2 0h1" /><path stroke="silver" d="M7 7h3M6 8h1m3 0h1" /></svg>;

export const wmconfig130Data = {
  '32x32_4': Wmconfig130_32x32_4,
  '16x16_4': Wmconfig130_16x16_4
};

export interface Wmconfig130Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Wmconfig130Component = ({
  variant = '32x32_4',
  ...rest
}: Wmconfig130Props) => {
  const Svg = wmconfig130Data[variant];

  return <Svg {...rest} />;
};

export const Wmconfig130 = React.memo(Wmconfig130Component);
Wmconfig130.displayName = 'Wmconfig130';
