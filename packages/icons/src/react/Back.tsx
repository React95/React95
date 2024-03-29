import React from 'react';
import type { SVGProps } from "react";

const Back_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M2 1h5M1 2h1m5 0h1M0 3h14M0 4h1m13 0h1M0 5h1m4 0h1m8 0h1M0 6h1m3 0h3m7 0h1M0 7h1m2 0h5m6 0h1M0 8h1m4 0h1m8 0h1M0 9h1m4 0h1m8 0h1M0 10h1m4 0h6m3 0h1M0 11h1m13 0h1M0 12h1m13 0h1M0 13h15" /><path stroke="#ff0" d="M2 2h1m1 0h1m1 0h1M2 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 5h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1M2 6h1m5 0h1m1 0h1m1 0h1M1 7h1m7 0h1m1 0h1m1 0h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 9h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1M2 10h1m1 0h1m7 0h1M1 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M3 2h1m1 0h1M1 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 6h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1M2 7h1m5 0h1m1 0h1m1 0h1M1 8h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1M2 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 10h1m1 0h1m7 0h1m1 0h1M2 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const backData = {
  '16x16_4': Back_16x16_4
};

export interface BackProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Back: React.FC<BackProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = backData[variant];

  return <Svg {...rest} />;
};
