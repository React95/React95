import React from 'react';
import type { SVGProps } from "react";

const Awfext326050_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M10 1h3M9 2h1m3 0h2M5 3h4M3 4h2m2 0h1M2 5h1m3 0h2M1 6h1m2 0h2m8 0h1M0 7h1m2 0h1m2 0h1m1 0h1m6 0h1M0 8h1m1 0h1m2 0h1m1 0h1m1 0h1m4 0h1M0 9h2m2 0h1m1 0h1m1 0h1m3 0h3M0 10h2m5 0h1m2 0h5M1 11h1m7 0h6M5 12h1m2 0h5m-6 1h4m-4 1h2" /><path stroke="#fff" d="M10 2h3M9 3h6M5 4h2m1 0h6M3 5h1m4 0h5M2 6h1m3 0h1m4 0h1M1 7h1m2 0h1M1 8h1m1 0h1M2 9h1m-1 1h2m0 1h2m0 1h1" /><path stroke="#000" d="M15 3h1m-2 1h1m-2 1h2m-3 1h1M7 7h1m4 0h1M6 8h1m1 0h1m6 0h1M5 9h1m1 0h1m7 0h1M6 10h1m8 0h1M0 11h1m14 0h1M1 12h1m11 0h2M2 13h2m7 0h2m-9 1h2m3 0h2m-5 1h3" /><path stroke="silver" d="M4 5h2M3 6h1m3 0h4m2 0h1M2 7h1m2 0h1m3 0h3m1 0h2M4 8h1m5 0h4M3 9h1m5 0h3m-8 1h2m2 0h2m-8 1h2m2 0h3m-7 1h3m2 0h1m-4 1h3m-1 1h1" /></svg>;

export const awfext326050Data = {
  '16x16_4': Awfext326050_16x16_4
};

export interface Awfext326050Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Awfext326050: React.FC<Awfext326050Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = awfext326050Data[variant];

  return <Svg {...rest} />;
};
