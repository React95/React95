import React from 'react';
import type { SVGProps } from "react";

const Mail2_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M1 2h13M1 3h1m11 0h1M1 4h1m11 0h1M1 5h1m11 0h1M1 6h1m11 0h1M1 7h1m11 0h1M1 8h1m11 0h1M1 9h1m11 0h1M1 10h1m11 0h1M1 11h13" /><path stroke="#000" d="M2 3h1m9 0h1m1 0h1M3 4h1m7 0h1m2 0h1M4 5h1m5 0h1m3 0h1M5 6h1m3 0h1m4 0h1M4 7h1m1 0h1m1 0h1m1 0h1m3 0h1M3 8h1m3 0h1m3 0h1m2 0h1M2 9h1m9 0h1m1 0h1m-1 1h1m-1 1h1M2 12h13" /><path stroke="#ff0" d="M3 3h1m1 0h1m1 0h1m1 0h1m1 0h1M2 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1M2 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M4 3h1m1 0h1m1 0h1m1 0h1M2 5h1M2 7h1" /><path stroke="silver" d="M5 4h1m1 0h1m1 0h1M6 5h1m1 0h1m3 0h1M3 6h1m3 0h1m3 0h1m0 1h1M5 8h1m3 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const mail2Data = {
  '16x16_4': Mail2_16x16_4
};

export interface Mail2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Mail2: React.FC<Mail2Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = mail2Data[variant];

  return <Svg {...rest} />;
};
