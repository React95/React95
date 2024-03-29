import React from 'react';
import type { SVGProps } from "react";

const Time_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M6 1h5M4 2h2m5 0h2M3 3h1m4 0h1m4 0h1M2 4h1m11 0h1M2 5h1m11 0h1M1 6h1m13 0h1M1 7h1m13 0h1M1 8h1m6 0h6m1 0h1M1 9h1m5 0h1m7 0h1M1 10h1m4 0h1m8 0h1M2 11h1m2 0h1m8 0h1M2 12h1m11 0h1M3 13h1m9 0h1M4 14h2m5 0h2m-7 1h5" /><path stroke="#fff" d="M6 2h1m1 0h1m1 0h1M5 3h1m1 0h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 8h1m1 0h1m1 0h1m7 0h1M3 9h1m1 0h1m3 0h1m1 0h1m1 0h1M2 10h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1M3 11h1m3 0h1m1 0h1m1 0h1m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1" /><path stroke="#ff0" d="M7 2h1m1 0h1M4 3h1m1 0h1m3 0h1m1 0h1M3 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 8h1m1 0h1m1 0h1M2 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1M3 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M4 13h1m1 0h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1" /></svg>;

export const timeData = {
  '16x16_4': Time_16x16_4
};

export interface TimeProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Time: React.FC<TimeProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = timeData[variant];

  return <Svg {...rest} />;
};
