import React from 'react';
import type { SVGProps } from "react";

const Bold_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M3 4h8M4 5h3m2 0h3M4 6h3m2 0h3M4 7h3m2 0h3M4 8h7M4 9h3m2 0h3m-8 1h3m2 0h3m-8 1h3m2 0h3m-9 1h8" /></svg>;

export const boldData = {
  '16x16_4': Bold_16x16_4
};

export interface BoldProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Bold: React.FC<BoldProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = boldData[variant];

  return <Svg {...rest} />;
};
