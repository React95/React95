import React from 'react';
import type { SVGProps } from "react";

const FindArr_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M3 1h2m1 0h2M3 2h2m1 0h2M2 3h1m1 0h3m1 0h1M1 4h9M1 5h1m1 0h2m1 0h1m1 0h2M1 6h1m1 0h2m1 0h1m1 0h2M1 7h3m3 0h3M1 8h3m3 0h3" /><path stroke="gray" d="M3 3h1m3 0h1M2 6h1m4 0h1" /><path stroke="navy" d="M13 10h1m-1 1h2M4 12h1m1 0h1m1 0h1m1 0h6m-3 1h2m-2 1h1" /></svg>;

export const findArrData = {
  '16x16_4': FindArr_16x16_4
};

export interface FindArrProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const FindArr: React.FC<FindArrProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = findArrData[variant];

  return <Svg {...rest} />;
};
