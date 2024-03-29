import React from 'react';
import type { SVGProps } from "react";

const Wmsui323935_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M3 1h5M2 2h1m5 0h1M1 3h1m7 0h6M1 4h1m12 0h1M1 5h1m12 0h1M0 6h13m1 0h1M0 7h1m10 0h1m2 0h1M0 8h1m12 0h2M1 9h1m10 0h1m1 0h1M1 10h1m12 0h1M2 11h1m10 0h1M2 12h4m1 0h1m1 0h1m1 0h3" /><path stroke="#fff" d="M3 2h5M2 3h1m5 0h1M2 4h1m6 0h5M2 5h1M1 7h6m1 0h3M1 8h1m0 1h1m-1 1h1m0 1h1" /><path stroke="silver" d="M3 3h1m1 0h1m1 0h1M4 4h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-1 2h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m3 0h1m1 0h1m0 1h1m-8 1h1m3 0h1m1 0h1" /><path stroke="#ff0" d="M4 3h1m1 0h1M3 4h1m1 0h1m1 0h1M4 5h1m1 0h1m1 0h1m1 0h1m1 0h1m0 1h1M3 8h1m7 0h1M4 9h1m5 0h1m-8 1h1m3 0h1m3 0h1m-8 1h1m1 0h1m3 0h1m1 0h1" /><path stroke="#000" d="M15 4h1m-1 1h1m-1 1h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-2 1h2m-2 1h2M3 13h13" /><path stroke="#00f" d="M7 7h1M5 8h1m1 0h1m1 0h1M6 9h3m-5 1h3m1 0h3m-4 1h2m-3 1h1m1 0h1m1 0h1" /></svg>;

export const wmsui323935Data = {
  '16x16_4': Wmsui323935_16x16_4
};

export interface Wmsui323935Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Wmsui323935: React.FC<Wmsui323935Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = wmsui323935Data[variant];

  return <Svg {...rest} />;
};
