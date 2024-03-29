import React from 'react';
import type { SVGProps } from "react";

const FindDc2_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M6 0h1m3 0h1m0 2h1M3 3h1m9 0h1M3 7h1m9 0h1M5 8h1m5 0h1m-6 2h1m3 0h1" /><path stroke="#000" d="M7 0h3M5 1h2m3 0h2M4 2h2m6 0h1M4 3h7m1 0h1M1 4h3m6 0h1m2 0h1M1 5h1m1 0h1m1 0h4m1 0h1m2 0h1M1 6h1m1 0h1m6 0h1m2 0h1M1 7h1m2 0h1m1 0h3m1 0h1m1 0h1M1 8h1m2 0h1m5 0h1m1 0h1M1 9h1m3 0h2m3 0h4M1 10h1m5 0h3m2 0h3M1 11h1m7 0h1m3 0h3M1 12h1m7 0h1m4 0h2M1 13h1m7 0h1m5 0h1M1 14h9" /><path stroke="#0ff" d="M4 4h1m1 0h1M4 6h1m1 0h1m1 0h1M5 7h1" /><path stroke="#fff" d="M5 4h1m1 0h3M2 5h1m1 0h1m4 0h1M2 6h1m2 0h1m1 0h1m1 0h1M2 7h1m6 0h1M2 8h2m2 0h4M2 9h3m2 0h3m-8 1h4m-4 1h7m-7 1h7m-7 1h7" /></svg>;

export const findDc2Data = {
  '16x16_4': FindDc2_16x16_4
};

export interface FindDc2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const FindDc2: React.FC<FindDc2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = findDc2Data[variant];

  return <Svg {...rest} />;
};
