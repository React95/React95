import React from 'react';
import type { SVGProps } from "react";

const Cut_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="#000" d="M5 1h1m3 0h1M5 2h1m3 0h1M5 3h1m3 0h1M5 4h2m1 0h2M6 5h1m1 0h1M6 6h3M7 7h1M7 8h1" /><path stroke="navy" d="M6 8h1m1 0h1M6 9h1m1 0h3m-7 1h3m1 0h1m2 0h1m-9 1h1m2 0h1m1 0h1m2 0h1m-9 1h1m2 0h1m1 0h1m2 0h1m-9 1h1m2 0h1m2 0h2m-7 1h2" /></svg>;

export const cutData = {
  '16x16_4': Cut_16x16_4
};

export interface CutProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Cut: React.FC<CutProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = cutData[variant];

  return <Svg {...rest} />;
};
