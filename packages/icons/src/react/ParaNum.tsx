import React from 'react';
import type { SVGProps } from "react";

const ParaNum_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="navy" d="M2 2h1M1 3h2M2 4h1M1 5h3M1 7h2m0 1h1M2 9h1m-2 1h3m-3 2h3m-2 1h1m0 1h1m-3 1h2" /><path stroke="#000" d="M6 3h9M6 8h9m-9 5h9" /></svg>;

export const paraNumData = {
  '16x16_4': ParaNum_16x16_4
};

export interface ParaNumProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const ParaNum: React.FC<ParaNumProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = paraNumData[variant];

  return <Svg {...rest} />;
};
