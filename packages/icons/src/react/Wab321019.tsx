import React from 'react';
import type { SVGProps } from "react";

const Wab321019_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="navy" d="M7 4h2m14 0h2M6 5h1m2 0h1m12 0h1m2 0h1M5 6h1m4 0h1m10 0h1m4 0h1M5 7h1m4 0h1m10 0h1m4 0h1M5 8h1m4 0h1m10 0h1m4 0h1M6 9h1m2 0h1m12 0h1m2 0h1M7 10h2m14 0h2M7 11h2m14 0h2M5 12h2m2 0h2m10 0h2m2 0h2M4 13h1m6 0h1m8 0h1m6 0h1M3 14h1m8 0h1m6 0h1m8 0h1M2 15h1m1 0h1m6 0h1m1 0h1m4 0h1m1 0h1m6 0h1m1 0h1M2 16h2m1 0h1m4 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m4 0h1m1 0h2M1 17h2m2 0h1m4 0h1m2 0h1m1 0h2m1 0h1m2 0h1m4 0h1m2 0h2M1 18h2m2 0h1m4 0h1m3 0h1m2 0h1m3 0h1m4 0h1m2 0h2M1 19h1m3 0h1m4 0h1m4 0h2m4 0h1m4 0h1m3 0h1M5 20h1m1 0h2m1 0h1m10 0h1m1 0h2m1 0h1M5 21h2m2 0h2m10 0h2m2 0h2M5 22h2m2 0h2m10 0h2m2 0h2M5 23h2m2 0h2m10 0h2m2 0h2M5 24h2m2 0h2m10 0h2m2 0h2M5 25h2m2 0h2m10 0h2m2 0h2M4 26h1m1 0h1m2 0h1m1 0h1m8 0h1m1 0h1m2 0h1m1 0h1M3 27h4m2 0h4m6 0h4m2 0h4" /><path stroke="#00f" d="M7 5h2m14 0h2M6 6h4m12 0h4M6 7h4m12 0h4M6 8h4m12 0h4M7 9h2m14 0h2M7 12h2m14 0h2M5 13h6m10 0h6M4 14h8m8 0h8M3 15h1m1 0h6m1 0h1m6 0h1m1 0h6m1 0h1M6 16h4m3 0h1m4 0h1m3 0h4M6 17h4m4 0h1m2 0h1m4 0h4M6 18h4m5 0h2m5 0h4M6 19h4m12 0h4M6 20h1m2 0h1m12 0h1m2 0h1M5 26h1m4 0h1m10 0h1m4 0h1" /></svg>;

export const wab321019Data = {
  '32x32_4': Wab321019_32x32_4
};

export interface Wab321019Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wab321019: React.FC<Wab321019Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wab321019Data[variant];

  return <Svg {...rest} />;
};
