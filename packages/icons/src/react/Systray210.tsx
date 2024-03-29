import React from 'react';
import type { SVGProps } from "react";

const Systray210_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 1h2M3 2h3m1 0h1M1 3h2m1 0h1m1 0h1m1 0h1M1 4h1m1 0h1m1 0h1m1 0h1m1 0h1M2 5h1m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1M4 7h1m1 0h1m1 0h1m1 0h1m1 0h1M5 8h1m1 0h1m1 0h1m1 0h1m1 0h1M6 9h1m5 0h1m-6 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1m-5 1h1m1 0h1" /><path stroke="#000" d="M7 1h1m0 1h1m0 1h1M0 4h1m9 0h1M0 5h1m10 0h1M0 6h2m10 0h1M1 7h1m11 0h1m0 1h1m-1 1h2m-3 1h1m1 0h1M6 11h1m4 0h1m2 0h1m-9 1h2m1 0h1m2 0h2m-7 1h2m1 0h2m-4 1h2" /><path stroke="olive" d="M6 2h1M3 3h1m1 0h1m1 0h1M2 4h1m1 0h1m1 0h1m1 0h1M1 5h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1M2 8h1m1 0h1m1 0h1m1 0h1m3 0h1M3 9h1m1 0h1m1 0h1m3 0h1m1 0h1M4 10h1m1 0h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1" /><path stroke="silver" d="M2 7h1m0 1h1m0 1h1m0 1h1m8 0h1" /><path stroke="navy" d="M10 8h1M8 9h3" /><path stroke="#ff0" d="M13 11h1m-3 1h1m-3 1h1" /></svg>;

export const systray210Data = {
  '16x16_4': Systray210_16x16_4
};

export interface Systray210Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Systray210: React.FC<Systray210Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = systray210Data[variant];

  return <Svg {...rest} />;
};
