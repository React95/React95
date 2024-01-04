import React from 'react';
import type { SVGProps } from "react";

const ArrowLeft_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M11 10h1m-2 1h2m-3 1h3m-4 1h4m-5 1h19M6 15h20M6 16h20M7 17h19M8 18h4m-3 1h3m-2 1h2m-1 1h1" /></svg>;

export const arrowLeftData = {
  '32x32_4': ArrowLeft_32x32_4
};

export interface ArrowLeftProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const ArrowLeft: React.FC<ArrowLeftProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = arrowLeftData[variant];

  return <Svg {...rest} />;
};
