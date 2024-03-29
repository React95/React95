import React from 'react';
import type { SVGProps } from "react";

const Sndvol32302_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M9 1h2M9 2h3M9 3h1M8 4h2m2 0h1M8 5h1m3 0h1M8 6h1m3 0h1M8 7h2m2 0h1M8 8h1m1 0h1m1 0h1M8 9h3m1 0h1M2 10h1m1 0h1m3 0h2m2 0h1M3 11h2m3 0h1m3 0h1m-8 1h1m2 0h1m3 0h1m-7 1h1m1 0h2m2 0h1m-6 1h1m1 0h1m2 0h1m-5 1h1m1 0h2m-3 1h2" /><path stroke="olive" d="M8 2h1M7 3h1M6 4h1M5 5h1M3 6h2M2 7h1M2 8h1M2 9h1m0 1h1m1 1h1m0 1h1m0 1h1m0 1h1m0 1h1" /><path stroke="#ff0" d="M8 3h1M7 4h1M6 5h1M5 6h1m1 0h1M6 7h1M3 8h1m1 0h1m1 0h1M3 9h1m2 0h1m-2 1h1m1 0h1m-2 1h1m0 1h1" /><path stroke="silver" d="M10 3h2m-2 1h1M9 5h1M9 6h1M4 7h1M4 8h1m4 0h1M4 9h1m4 2h1m-1 1h1m0 2h2" /><path stroke="#fff" d="M11 4h1M7 5h1m2 0h2M6 6h1m3 0h2M3 7h1m1 0h1m1 0h1m2 0h2M6 8h1m4 0h1M5 9h1m1 0h1m3 0h1m-6 1h1m3 0h2m-5 1h1m2 0h2m-2 1h2m-2 1h2" /></svg>;

export const sndvol32302Data = {
  '32x32_4': Sndvol32302_32x32_4
};

export interface Sndvol32302Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Sndvol32302: React.FC<Sndvol32302Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = sndvol32302Data[variant];

  return <Svg {...rest} />;
};
