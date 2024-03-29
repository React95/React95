import React from 'react';
import type { SVGProps } from "react";

const Mail3_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M0 4h1m1 0h1m1 0h12M5 5h2m7 0h2M0 6h1m1 0h1m1 0h2m1 0h1m5 0h1m1 0h1M5 7h1m2 0h1m3 0h1m2 0h1M0 8h1m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 9h2m3 0h1m3 0h2M0 10h1m1 0h1m1 0h2m9 0h1M5 11h11" /><path stroke="#ff0" d="M7 5h1m1 0h1m1 0h1m1 0h1M6 6h1m1 0h1m1 0h1m1 0h1m1 0h1M7 7h1m1 0h1m1 0h1m1 0h1M6 8h1m1 0h1m1 0h1m1 0h1m1 0h1M7 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M8 5h1m1 0h1m1 0h1M9 6h1m1 0h1M6 7h1m3 0h1m3 0h1M8 9h1m3 0h1m-6 1h1m1 0h1m1 0h1m1 0h1" /></svg>;

export const mail3Data = {
  '16x16_4': Mail3_16x16_4
};

export interface Mail3Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Mail3: React.FC<Mail3Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = mail3Data[variant];

  return <Svg {...rest} />;
};
