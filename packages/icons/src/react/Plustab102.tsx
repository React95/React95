import React from 'react';
import type { SVGProps } from "react";

const Plustab102_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M10 5h1m11 0h1M9 6h3m11 0h1M8 7h4m11 0h1M8 8h4m12 0h1M7 9h6m7 0h1m3 0h1M7 10h2m1 0h4m6 0h1m4 0h1M7 11h2m1 0h4m5 0h1m5 0h1M6 12h2m3 0h3m5 0h1m6 0h1M5 13h3m3 0h4m3 0h1m7 0h1M5 14h2m4 0h5m2 0h1m8 0h1M5 15h2m5 0h4m1 0h1m9 0h1M4 16h11m13 0h1M3 17h12m1 0h8m4 0h1M3 18h2m8 0h1m2 0h2m11 0h1M2 19h3m10 0h3m11 0h1M0 20h7m3 0h1m8 0h2m10 0h1M0 21h7m3 0h11m1 0h10" /><path stroke="olive" d="M21 5h1m-2 1h1m-2 2h1m-2 2h1m2 1h1m-5 1h1m3 0h1m0 1h1m-7 1h1m5 0h1m0 1h1m-9 1h1m-2 2h1m9 0h1m-12 1h1m10 0h1m-14 1h1m6 0h1m3 0h1" /><path stroke="#ff0" d="M21 6h2m-3 1h3m-3 1h4m-5 1h1m1 0h3m-5 1h1m1 0h4m-7 1h1m3 0h3m-7 1h1m3 0h4m-9 1h1m5 0h3m-9 1h1m5 0h4m-11 1h1m7 0h3m-11 1h12m-13 1h1m8 0h4m-13 1h1m9 0h4m-15 1h1m10 0h4m-17 1h6m5 0h8" /></svg>;

export const plustab102Data = {
  '32x32_4': Plustab102_32x32_4
};

export interface Plustab102Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Plustab102Component = ({
  variant = '32x32_4',
  ...rest
}: Plustab102Props) => {
  const Svg = plustab102Data[variant];

  return <Svg {...rest} />;
};

export const Plustab102 = React.memo(Plustab102Component);
Plustab102.displayName = 'Plustab102';
