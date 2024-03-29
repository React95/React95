import React from 'react';
import type { SVGProps } from "react";

const Pen_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M11 1h1m1 0h1m-4 1h1m3 0h1M9 3h1M8 4h1m5 0h1M7 5h1m5 0h1M6 6h1m5 0h1M5 7h1m5 0h1M4 8h1m5 0h1M3 9h1m5 0h1m-8 1h1m5 0h1m-8 1h2m4 0h1m-7 1h1m1 0h1m2 0h1m-6 1h1m2 0h2m-5 1h4" /><path stroke="maroon" d="M12 1h1m-2 1h1m1 0h1m-2 1h1m1 0h1m-2 1h1" /><path stroke="red" d="M12 2h1m0 1h1" /><path stroke="olive" d="M10 3h2m-2 1h3m-2 1h2m-2 1h1m-2 1h1M9 8h1M8 9h1m-2 1h1m-2 1h1m-5 1h1m2 0h1m-4 1h2" /><path stroke="#ff0" d="M9 4h1M8 5h2M7 6h2M6 7h2M5 8h2M4 9h2m-3 1h2m-2 1h1" /><path stroke="silver" d="M10 5h1M9 6h1M8 7h1M7 8h1M6 9h1m-2 1h1m-2 1h1" /><path stroke="gray" d="M10 6h1M9 7h1M8 8h1M7 9h1m-2 1h1m-2 1h1m-2 1h1" /></svg>;

export const penData = {
  '16x16_4': Pen_16x16_4
};

export interface PenProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Pen: React.FC<PenProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = penData[variant];

  return <Svg {...rest} />;
};
