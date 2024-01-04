import React from 'react';
import type { SVGProps } from "react";

const Detlicon_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M4 2h4m1 0h3m1 0h3M4 6h4m1 0h3m1 0h3M4 8h4m1 0h3m1 0h3M4 10h4m1 0h3m1 0h3M4 12h4m1 0h3m1 0h3M4 14h4m1 0h3m1 0h3" /><path stroke="navy" d="M1 4h15M1 6h1M1 8h1m-1 2h1m-1 2h1m-1 2h1" /></svg>;

export const detliconData = {
  '16x16_4': Detlicon_16x16_4
};

export interface DetliconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Detlicon: React.FC<DetliconProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = detliconData[variant];

  return <Svg {...rest} />;
};
