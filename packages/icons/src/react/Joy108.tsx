import React from 'react';
import type { SVGProps } from "react";

const Joy108_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props} />;
const Joy108_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#ff0" d="M9 6h4M7 7h8M7 8h3m2 0h3M6 9h4m2 0h4M6 10h4m2 0h4M6 11h4m2 0h4M6 12h10m-9 1h3m2 0h3m-8 1h8m-6 1h4" /><path stroke="#000" d="M10 8h2m-2 1h2m-2 1h2m-2 1h2m-2 2h2" /></svg>;

export const joy108Data = {
  '32x32_4': Joy108_32x32_4,
  '16x16_4': Joy108_16x16_4
};

export interface Joy108Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Joy108: React.FC<Joy108Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = joy108Data[variant];

  return <Svg {...rest} />;
};
