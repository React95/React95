import React from 'react';
import type { SVGProps } from "react";

const Shdoc401200_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="maroon" d="M13 1h7M10 2h13M8 3h17M7 4h19M6 5h21M5 6h8m7 0h8M4 7h7m11 0h7M3 8h7m11 0h9M3 9h6m11 0h10M2 10h6m11 0h12M2 11h5m11 0h7m1 0h5M2 12h5m10 0h7m2 0h5M1 13h5m10 0h7m4 0h5M1 14h5m9 0h7m5 0h5M1 15h5m8 0h7m6 0h5M1 16h5m7 0h7m7 0h5M1 17h5m6 0h7m8 0h5M1 18h5m5 0h7m9 0h5M1 19h5m4 0h7m10 0h5M2 20h5m2 0h7m10 0h5M2 21h5m1 0h7m11 0h5M2 22h12m11 0h6M3 23h10m11 0h6M3 24h9m11 0h7M4 25h7m10 0h8M5 26h8m7 0h8M6 27h21M7 28h19M8 29h16m-14 1h13m-10 1h7" /></svg>;
const Shdoc401200_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="maroon" d="M4 1h8M3 2h10M2 3h3m6 0h3M1 4h3m6 0h5M1 5h2m6 0h3m1 0h2M1 6h2m5 0h3m2 0h2M1 7h2m4 0h3m3 0h2M1 8h2m3 0h3m4 0h2M1 9h2m2 0h3m5 0h2M1 10h2m1 0h3m6 0h2M1 11h5m6 0h3M2 12h3m6 0h3M3 13h10m-9 1h8" /></svg>;

export const shdoc401200Data = {
  '32x32_4': Shdoc401200_32x32_4,
  '16x16_4': Shdoc401200_16x16_4
};

export interface Shdoc401200Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Shdoc401200Component = ({
  variant = '32x32_4',
  ...rest
}: Shdoc401200Props) => {
  const Svg = shdoc401200Data[variant];

  return <Svg {...rest} />;
};

export const Shdoc401200 = React.memo(Shdoc401200Component);
Shdoc401200.displayName = 'Shdoc401200';
