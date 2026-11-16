import React from 'react';
import type { SVGProps } from "react";

const Moricons50_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M14 2h3m-6 1h4m1 0h4M9 4h3m2 0h1m1 0h1m2 0h3M8 5h2m1 0h1m1 0h5m1 0h1m2 0h1M8 6h1m2 0h2m5 0h2m2 0h1M7 7h4m9 0h4M7 8h1m2 0h1m9 0h2m1 0h2M6 9h4m11 0h1m2 0h1M6 10h1m2 0h1m11 0h4M6 11h4m11 0h1m2 0h1M7 12h1m1 0h1m11 0h4M7 13h1m2 0h1m9 0h2m1 0h1M7 14h5m8 0h4M9 15h1m1 0h2m5 0h2m2 0h1M9 16h1m2 0h6m1 0h1m1 0h2M9 17h4m1 0h3m2 0h3m-10 1h8m-6 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3m-3 1h3M0 29h26" /><path stroke="#fff" d="M15 3h1m-4 1h2m1 0h1m1 0h2m-9 1h1m1 0h1m5 0h1m1 0h2M9 6h2m9 0h2M8 8h2m12 0h1m-1 1h2M7 10h2m13 1h2M8 12h1m-1 1h2m12 0h1m-13 2h1m9 0h2m-12 1h2m6 0h1m1 0h1m-8 1h1m3 0h2" /><path stroke="#ff0" d="M13 6h5m-7 1h9m-9 1h9M10 9h11m-11 1h11m-11 1h11m-11 1h11m-10 1h9m-8 1h8m-7 1h5" /><path stroke="maroon" d="M4 22h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m5 0h1m1 0h1m1 0h1M3 23h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m5 0h1m1 0h1m1 0h1M2 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m9 0h1m1 0h1m1 0h1m1 0h1M1 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1M0 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 27h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M0 28h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="olive" d="M5 22h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m5 0h1m1 0h1M4 23h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m3 0h1m1 0h1m1 0h1m1 0h1M3 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m3 0h1m1 0h1m1 0h1m1 0h1M2 25h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m7 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1M0 27h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 28h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="gray" d="M20 22h4m-5 1h3m7 0h1m-12 1h3m8 0h1m-13 1h3m9 0h1m-13 1h2m10 0h1m-2 1h1m-2 1h2m-3 1h2M1 30h27M2 31h25" /></svg>;

export const moricons50Data = {
  '32x32_4': Moricons50_32x32_4
};

export interface Moricons50Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Moricons50Component = ({
  variant = '32x32_4',
  ...rest
}: Moricons50Props) => {
  const Svg = moricons50Data[variant];

  return <Svg {...rest} />;
};

export const Moricons50 = React.memo(Moricons50Component);
Moricons50.displayName = 'Moricons50';
