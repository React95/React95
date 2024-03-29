import React from 'react';
import type { SVGProps } from "react";

const What_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M2 1h1m7 0h3M2 2h1m8 0h2M1 3h1m1 0h1m6 0h1m1 0h1M1 4h3M0 5h1m3 0h1m4 0h1M0 6h1m3 0h1m4 1h1M2 8h1m7 1h1M1 10h1m6 1h1m-7 1h1m5 0h2m-6 1h1m1 0h1m1 0h3m-3 1h2m-2 1h1" /><path stroke="gray" d="M1 2h1m1 0h1M0 4h1m3 0h1m7 5h3m-3 1h1m2 0h1m-4 1h1m2 0h1m-4 1h3m-3 1h1m2 0h1m-4 1h1m2 0h1m-4 1h3" /></svg>;

export const whatData = {
  '16x16_4': What_16x16_4
};

export interface WhatProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const What: React.FC<WhatProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = whatData[variant];

  return <Svg {...rest} />;
};
