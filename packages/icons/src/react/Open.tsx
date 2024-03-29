import React from 'react';
import type { SVGProps } from "react";

const Open_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M9 0h3M8 1h1m3 0h1m1 0h1m-2 1h2M1 3h3m8 0h3M0 4h1m3 0h7M0 5h1m9 0h1M0 6h1m9 0h1M0 7h1m4 0h10M0 8h1m3 0h1m9 0h1M0 9h1m2 0h1m9 0h1M0 10h1m1 0h1m9 0h1M0 11h2m9 0h1M0 12h11" /><path stroke="#fff" d="M1 4h1m1 0h1M2 5h1m1 0h1m1 0h1m1 0h1M1 6h1m1 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1M1 8h1m1 0h1M2 9h1m-2 1h1" /><path stroke="#ff0" d="M2 4h1M1 5h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m1 0h1M1 7h1m1 0h1M2 8h1M1 9h1" /><path stroke="olive" d="M5 8h9M4 9h9M3 10h9M2 11h9" /></svg>;

export const openData = {
  '16x16_4': Open_16x16_4
};

export interface OpenProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Open: React.FC<OpenProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = openData[variant];

  return <Svg {...rest} />;
};
