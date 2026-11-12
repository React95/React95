import React from 'react';
import type { SVGProps } from "react";

const Moricons23_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M9 2h1m11 0h1M10 3h1m9 0h1M7 4h1m3 0h9m3 0h1M8 5h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1M5 6h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1M6 7h1m1 0h1m5 0h1m1 0h1m5 0h1m1 0h1M3 8h1m3 0h1m7 0h1m7 0h1m3 0h1M4 9h1m1 0h1m17 0h1m1 0h1M1 10h1m3 0h1m3 0h4m5 0h4m3 0h1m3 0h1M2 11h1m1 0h1m3 0h1m4 0h1m3 0h1m4 0h1m3 0h1m1 0h1M3 12h1m6 0h2m7 0h2m6 0h1M2 13h1m7 0h2m7 0h2m7 0h1M1 14h1m27 0h1M0 15h1m13 0h3m13 0h1M1 16h1m12 0h3m12 0h1M2 17h1m11 0h3m11 0h1M3 18h1m23 0h1M4 19h1m21 0h1M5 20h1m4 0h1m9 0h1m4 0h1M6 21h1m4 0h9m4 0h1M7 22h1m4 0h1m5 0h1m4 0h1M8 23h1m4 0h5m4 0h1M9 24h1m11 0h1m-12 1h1m9 0h1m-10 1h1m7 0h1m-8 1h1m5 0h1m-6 1h1m3 0h1m-4 1h1m1 0h1m-2 1h1" /><path stroke="#ff0" d="M11 5h1m7 0h1M10 6h3m5 0h3M9 7h5m3 0h5M8 8h7m1 0h7M7 9h17M6 10h3m4 0h5m4 0h3M5 11h3m1 0h4m1 0h3m1 0h4m1 0h3M4 12h6m2 0h7m2 0h6M3 13h7m2 0h7m2 0h7M2 14h27M1 15h13m3 0h13M2 16h12m3 0h12M3 17h11m3 0h11M4 18h23M5 19h21M6 20h4m1 0h9m1 0h4M7 21h4m9 0h4M8 22h4m7 0h4M9 23h4m5 0h4m-12 1h11m-10 1h9m-8 1h7m-6 1h5m-4 1h3m-2 1h1" /><path stroke="#00f" d="M13 5h5m-4 1h3m-2 1h1" /><path stroke="#fff" d="M13 22h5" /></svg>;

export const moricons23Data = {
  '32x32_4': Moricons23_32x32_4
};

export interface Moricons23Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons23Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons23Props) => {
  const Svg = moricons23Data[variant];

  return <Svg {...rest} />;
};

export const Moricons23 = React.memo(Moricons23Component);
Moricons23.displayName = 'Moricons23';
