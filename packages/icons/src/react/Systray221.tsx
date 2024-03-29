import React from 'react';
import type { SVGProps } from "react";

const Systray221_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 0h2M7 2h1M6 4h1M6 5h1M6 6h2M6 7h1m1 0h1M6 8h1M0 9h1m5 0h1m-6 1h1m1 1h1m0 1h1m2 1h1m-1 2h2" /><path stroke="red" d="M6 1h5M4 2h2m5 0h2M3 3h1m9 0h1M2 4h1m9 0h3M2 5h1m8 0h2m1 0h1M1 6h1m8 0h2m3 0h1M1 7h1m7 0h2m4 0h1M1 8h1m6 0h2m5 0h1M1 9h1m5 0h2m6 0h1M2 10h1m3 0h2m6 0h1M2 11h1m2 0h2m7 0h1M3 12h1m1 0h1m7 0h1M4 13h2m5 0h2m-7 1h5" /><path stroke="#ff0" d="M6 2h1M5 3h1M4 4h1M3 5h1m1 0h1M4 6h1M3 7h1m1 0h1M4 8h1M3 9h1m1 0h1m-2 1h1" /><path stroke="silver" d="M8 2h2M8 3h1M7 4h1M7 5h1M2 6h1M2 7h1m4 0h1M2 8h1m4 3h1m0 2h2" /><path stroke="olive" d="M4 3h1M3 4h1M1 5h1M0 6h1M0 7h1M0 8h1m2 2h1m0 1h1m1 2h1" /><path stroke="gray" d="M6 3h2m2 0h1m3 0h1m-5 1h1m-1 1h1M7 8h1m2 0h1m1 0h3M2 9h1m7 0h1m-1 1h1m-1 1h1m1 0h1m-7 1h2m2 0h1m-1 1h1m3 0h1" /><path stroke="#fff" d="M9 3h1M5 4h1m2 0h2M4 5h1m3 0h2M3 6h1m1 0h1m2 0h2M4 7h1M3 8h1m1 0h1M4 9h1m4 0h1m-5 1h1m2 0h2m-2 1h2m-2 1h2" /></svg>;

export const systray221Data = {
  '16x16_4': Systray221_16x16_4
};

export interface Systray221Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Systray221: React.FC<Systray221Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = systray221Data[variant];

  return <Svg {...rest} />;
};
