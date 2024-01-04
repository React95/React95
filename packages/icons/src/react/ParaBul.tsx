import React from 'react';
import type { SVGProps } from "react";

const ParaBul_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="navy" d="M1 2h3M1 3h3M1 4h3M1 7h3M1 8h3M1 9h3m-3 3h3m-3 1h3m-3 1h3" /><path stroke="#000" d="M6 3h9M6 8h9m-9 5h9" /></svg>;

export const paraBulData = {
  '16x16_4': ParaBul_16x16_4
};

export interface ParaBulProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const ParaBul: React.FC<ParaBulProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = paraBulData[variant];

  return <Svg {...rest} />;
};
