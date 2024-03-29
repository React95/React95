import React from 'react';
import type { SVGProps } from "react";

const Fullscrn_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M1 2h13M0 3h1m13 0h1M0 4h1m1 0h11m1 0h1M0 5h1m1 0h1m9 0h1m1 0h1M0 6h1m1 0h1m9 0h1m1 0h1M0 7h1m1 0h1m9 0h1m1 0h1M0 8h1m1 0h1m9 0h1m1 0h1M0 9h1m1 0h1m9 0h1m1 0h1M0 10h1m1 0h1m9 0h1m1 0h1M0 11h1m1 0h1m9 0h1m1 0h1M0 12h1m1 0h11m1 0h1M0 13h1m13 0h1M1 14h13" /><path stroke="silver" d="M1 3h13M1 4h1m11 0h1M1 5h1m11 0h1M1 6h1m11 0h1M1 7h1m11 0h1M1 8h1m11 0h1M1 9h1m11 0h1M1 10h1m11 0h1M1 11h1m11 0h1M1 12h1m11 0h1M1 13h13" /><path stroke="#0ff" d="M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1M8 6h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m-9 2h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M4 5h1m1 0h1m1 0h1m1 0h1M3 6h1m3 0h1m1 0h1m1 0h1M4 7h1m1 0h1m1 0h1m1 0h1M3 8h1m7 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m7 0h1m-8 1h1m1 0h1m1 0h1m1 0h1" /><path stroke="gray" d="M4 6h3M4 8h7m-7 2h7" /></svg>;

export const fullscrnData = {
  '16x16_4': Fullscrn_16x16_4
};

export interface FullscrnProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Fullscrn: React.FC<FullscrnProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = fullscrnData[variant];

  return <Svg {...rest} />;
};
