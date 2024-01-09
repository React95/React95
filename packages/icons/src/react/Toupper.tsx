import React from 'react';
import type { SVGProps } from "react";

const Toupper_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="navy" d="M4 1h3M3 2h1m3 0h1m2 0h1M2 3h1m5 0h3M2 4h1m5 0h3M7 5h4" /><path stroke="#000" d="M2 7h2m7 0h1M1 8h1m2 0h1m6 0h1M2 9h3m5 0h1m1 0h1M1 10h1m2 0h1m5 0h1m1 0h1M1 11h1m2 0h1m4 0h1m3 0h1M2 12h2m1 0h1m3 0h5m-6 1h1m5 0h1m-8 1h3m3 0h3" /><path stroke="gray" d="M10 8h1m1 0h1m-2 1h1m-3 1h1m3 0h1m-4 1h1m1 0h1m-5 1h1m5 0h1" /></svg>;

export const toupperData = {
  '16x16_4': Toupper_16x16_4
};

export interface ToupperProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Toupper: React.FC<ToupperProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = toupperData[variant];

  return <Svg {...rest} />;
};
