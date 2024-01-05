import React from 'react';
import type { SVGProps } from "react";

const Sndvol32301_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="olive" d="M4 2h2m0 1h1m0 1h1m0 1h1m0 1h1m0 1h2m0 1h1m-1 1h1m-1 1h1m-2 1h1m-3 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="#000" d="M3 3h3M5 4h1M2 5h1m2 0h2M2 6h1m3 0h1M2 7h1m3 0h1M2 8h1m2 0h2M2 9h1m1 0h1m1 0h1m-5 1h1m1 0h3m-5 1h1m2 0h2m3 0h1m1 0h1M2 12h1m3 0h1m3 0h2M2 13h1m3 0h1m2 0h1m-8 1h1m2 0h2m1 0h1m-7 1h1m2 0h1m1 0h1m-5 1h2m1 0h1m-3 1h2" /><path stroke="silver" d="M2 4h3M4 5h1m0 1h1M5 7h1m4 1h1M5 9h1m4 0h1m-1 1h1m-6 2h1m-1 1h1m-3 2h2" /><path stroke="#ff0" d="M6 4h1m0 1h1m0 1h1M7 7h1m1 0h1M8 8h1M7 9h1m1 0h1m1 0h1m-4 1h1m2 0h1m-5 1h1m1 0h1m-2 1h1m-2 1h1" /><path stroke="#fff" d="M3 5h1M3 6h2m2 0h1M3 7h2m3 0h1M3 8h2m2 0h1m1 0h1m1 0h1M3 9h1m4 0h1m-6 1h1m3 0h1m1 0h1m-7 1h2m3 0h1m-6 1h2m2 0h1m-5 1h2m-2 1h2" /></svg>;

export const sndvol32301Data = {
  '32x32_4': Sndvol32301_32x32_4
};

export interface Sndvol32301Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Sndvol32301: React.FC<Sndvol32301Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = sndvol32301Data[variant];

  return <Svg {...rest} />;
};
