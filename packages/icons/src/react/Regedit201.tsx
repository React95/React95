import React from 'react';
import type { SVGProps } from "react";

const Regedit201_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M6 1h8M5 2h1m7 0h1M4 3h1m7 0h2M4 4h1m7 0h2M4 5h1m5 0h1m1 0h2M4 6h1m5 0h1m1 0h2M4 7h1m2 0h4m1 0h2M4 8h1m7 0h1m1 0h2M4 9h1m8 0h1M3 10h1m8 0h1m1 0h1M3 11h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2M2 12h1m-2 1h1" /><path stroke="silver" d="M6 2h7m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M6 8h6m2 1h1M4 10h8m1 0h1M4 12h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 1h1" /><path stroke="#000" d="M14 2h1m-1 1h1M6 4h5m3 0h1M6 5h1m7 0h1M6 6h1m7 0h1M6 7h1m7 0h1m-2 1h1M5 9h8m2 0h1m-1 1h1M4 11h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1M3 12h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m-2 1h1M1 14h12" /><path stroke="#fff" d="M5 3h6M5 4h1M5 5h1M5 6h1M5 7h1M5 8h1m-4 5h10" /><path stroke="#0ff" d="M7 5h1" /><path stroke="teal" d="M8 5h2M7 6h3" /></svg>;

export const regedit201Data = {
  '16x16_4': Regedit201_16x16_4
};

export interface Regedit201Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Regedit201: React.FC<Regedit201Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = regedit201Data[variant];

  return <Svg {...rest} />;
};
