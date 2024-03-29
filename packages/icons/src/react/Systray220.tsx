import React from 'react';
import type { SVGProps } from "react";

const Systray220_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 0h2M8 1h1M7 2h1M6 4h1M6 5h1M6 6h2M6 7h1m1 0h1M6 8h1m1 0h1M0 9h1m5 0h2m-7 1h2m3 0h1m-4 1h1m2 0h1m-3 1h1m0 1h1m1 0h1m-2 1h1m1 0h1m-2 1h2" /><path stroke="#bfbf00" d="M6 1h1M5 2h1M4 3h1M3 4h1M1 5h2M0 6h1M0 7h1M0 8h1m0 1h1m1 1h1m0 1h1m0 1h1m0 1h1m0 1h1" /><path stroke="gray" d="M7 1h1m1 0h1M6 3h2m2 0h1m3 0h1m-5 1h1m2 0h1m-4 1h1m1 0h1m-3 1h1m-1 1h1M7 8h1m2 0h1m1 0h4M2 9h1m7 0h1m-1 1h1m-1 1h1m1 0h1m-7 1h2m2 0h1m2 0h1m-4 1h1m3 0h1m-6 1h1" /><path stroke="#ff0" d="M6 2h1M5 3h1M4 4h1M3 5h1m1 0h1M4 6h1M1 7h1m1 0h1m1 0h1M1 8h1m2 0h1M3 9h1m1 0h1m-2 1h1m0 1h1" /><path stroke="silver" d="M8 2h2M8 3h1M7 4h1M7 5h1M2 6h1M2 7h1m4 0h1M2 8h1m4 2h1m-1 1h1m0 2h2" /><path stroke="#fff" d="M9 3h1M5 4h1m2 0h2M4 5h1m3 0h2M1 6h1m1 0h1m1 0h1m2 0h2M4 7h1m4 0h1M3 8h1m1 0h1m3 0h1M4 9h1m3 0h2m-5 1h1m2 0h2m-2 1h2m-2 1h2" /></svg>;

export const systray220Data = {
  '16x16_4': Systray220_16x16_4
};

export interface Systray220Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Systray220: React.FC<Systray220Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = systray220Data[variant];

  return <Svg {...rest} />;
};
