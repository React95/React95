import React from 'react';
import type { SVGProps } from "react";

const Tick_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#000" d="M8 4h2M8 5h2M7 6h2M7 7h2M3 8h2m1 0h2M3 9h2m1 0h2m-4 1h3m-3 1h3m-2 1h1" /></svg>;

export const tickData = {
  '16x16_4': Tick_16x16_4
};

export interface TickProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Tick: React.FC<TickProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = tickData[variant];

  return <Svg {...rest} />;
};
