import React from 'react';
import type { SVGProps } from "react";

const Mmsys90_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M9 11h2m2 0h2m2 0h2m4 0h2m2 0h2M8 12h2m2 0h2m2 0h2m4 0h2m2 0h2M7 13h2m2 0h2m2 0h2m4 0h2m2 0h2m4 0h1M6 14h2m2 0h2m2 0h2m4 0h2m2 0h2m5 0h1m-1 1h1m-1 1h1m-2 1h1M0 18h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1m4 0h1M0 19h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1M0 20h28" /><path stroke="gray" d="M11 11h1m3 0h1m3 0h1m5 0h1m3 0h1M6 12h2m2 0h2m2 0h2m2 0h4m2 0h2m2 0h3M5 13h1m3 0h2m2 0h2m2 0h2m4 0h2m2 0h2M4 14h1m3 0h2m2 0h2m2 0h2m4 0h2m2 0h2M3 15h1m2 0h3m1 0h3m1 0h3m3 0h3m1 0h3m3 0h1M2 16h1m26 0h2M1 17h1m26 0h2M1 18h3m1 0h3m1 0h3m1 0h3m1 0h3m1 0h3m1 0h4M1 19h3m1 0h3m1 0h3m1 0h3m1 0h3m1 0h3m1 0h3" /><path stroke="#fff" d="M6 13h1m12 0h1m9 0h2M5 14h1m12 0h1m9 0h3M4 15h2m3 0h1m3 0h1m3 0h1m1 0h1m3 0h1m3 0h3M3 16h2m1 0h3m1 0h3m1 0h3m1 0h3m1 0h3m1 0h3M2 17h2m1 0h3m1 0h3m1 0h3m1 0h3m1 0h3m1 0h3" /><path stroke="silver" d="M20 13h1m-2 1h1m-2 1h1M5 16h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1M4 17h1m3 0h1m3 0h1m3 0h1m3 0h1m3 0h1" /></svg>;

export const mmsys90Data = {
  '32x32_4': Mmsys90_32x32_4
};

export interface Mmsys90Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mmsys90: React.FC<Mmsys90Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mmsys90Data[variant];

  return <Svg {...rest} />;
};
