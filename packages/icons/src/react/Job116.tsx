import React from 'react';
import type { SVGProps } from "react";

const Job116_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M2 1h12m1 0h1M2 2h1M2 3h1m12 0h1M2 4h1m11 0h1M2 5h1m10 0h1M2 6h1M2 7h1m7 0h1M2 8h1m3 0h1M2 9h1m11 0h1M2 10h1m12 0h1M0 11h14m1 0h1M0 12h1m-1 1h1m12 0h1m1 0h1M2 14h1m12 0h1M2 15h1m10 0h2" /><path stroke="#fff" d="M3 2h10M3 3h10M3 4h1m1 0h7M3 5h1m2 0h5M3 6h1m3 0h3M3 7h1m4 0h2m2 0h1M3 8h1m6 0h3M3 9h1m6 0h3M3 10h1m7 0h2" /><path stroke="gray" d="M13 2h1M4 4h1M4 5h2m8 0h1M4 6h1m1 0h1m6 0h2M4 7h1m2 0h1m3 0h1m1 0h2M4 8h1m3 0h1m4 0h2M4 9h1m1 0h2m1 0h1m3 0h1M4 10h1m1 0h3m1 0h1m2 0h2m0 2h1M1 13h12m0 1h1M3 15h10" /><path stroke="green" d="M14 2h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m1 0h1" /><path stroke="#0f0" d="M15 2h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1" /><path stroke="silver" d="M5 6h1M5 7h2M5 8h1m1 0h1m1 0h1M5 9h1m2 0h1m-4 1h1m3 0h1m4 1h1M1 12h12m1 0h1m-1 1h1M3 14h10m1 0h1" /><path stroke="olive" d="M13 12h1" /></svg>;

export const job116Data = {
  '16x16_4': Job116_16x16_4
};

export interface Job116Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Job116: React.FC<Job116Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = job116Data[variant];

  return <Svg {...rest} />;
};
