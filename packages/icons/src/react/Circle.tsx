import React from 'react';
import type { SVGProps } from "react";

const Circle_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="navy" d="M9 2h4M9 3h3M3 4h2m4 0h4M3 5h2m4 0h1m1 0h2M2 6h2m8 0h2M2 7h2m8 0h2M2 8h2m8 0h2M2 9h2m8 0h2M3 10h2m6 0h2M3 11h3m4 0h3m-9 1h8m-6 1h4" /></svg>;

export const circleData = {
  '16x16_4': Circle_16x16_4
};

export interface CircleProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Circle: React.FC<CircleProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = circleData[variant];

  return <Svg {...rest} />;
};
