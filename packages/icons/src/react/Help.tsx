import React from 'react';
import type { SVGProps } from "react";

const Help_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M5 1h6M4 2h1m5 0h2M3 3h1m2 0h3m2 0h2M3 4h1m1 0h2m2 0h1m1 0h2M3 5h1m1 0h2m1 0h1m2 0h2M4 6h2m1 0h1m2 0h2M6 7h1m2 0h2M6 8h1m1 0h2M6 9h1m1 0h2m-4 1h1m1 0h2m-3 1h2m-3 1h1m2 0h2m-5 1h1m2 0h2m-4 1h3" /><path stroke="#ff0" d="M5 2h5M4 3h2m3 0h2M4 4h1m5 0h1M4 5h1m4 0h2M8 6h2M7 7h2M7 8h1M7 9h1m-1 1h1m-1 2h2m-2 1h2" /></svg>;

export const helpData = {
  '16x16_4': Help_16x16_4
};

export interface HelpProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Help: React.FC<HelpProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = helpData[variant];

  return <Svg {...rest} />;
};
