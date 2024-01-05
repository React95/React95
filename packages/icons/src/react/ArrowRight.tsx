import React from 'react';
import type { SVGProps } from "react";

const ArrowRight_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M20 10h1m-1 1h2m-2 1h3m-3 1h4M6 14h19M6 15h20M6 16h20M6 17h19m-5 1h4m-4 1h3m-3 1h2m-2 1h1" /></svg>;

export const arrowRightData = {
  '32x32_4': ArrowRight_32x32_4
};

export interface ArrowRightProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = arrowRightData[variant];

  return <Svg {...rest} />;
};
