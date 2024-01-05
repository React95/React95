import React from 'react';
import type { SVGProps } from "react";

const Centre_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M1 2h14M3 4h10M1 6h14M3 8h10M1 10h14M3 12h10" /></svg>;

export const centreData = {
  '16x16_4': Centre_16x16_4
};

export interface CentreProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Centre: React.FC<CentreProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = centreData[variant];

  return <Svg {...rest} />;
};
