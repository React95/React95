import React from 'react';
import type { SVGProps } from "react";

const Svrworld_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M1 1h2m1 0h3m1 0h1m6 0h1M0 2h1m2 0h2m1 0h2m7 0h1M0 3h1m2 0h1m7 0h1m3 0h1M1 4h2m8 0h1m3 0h1M3 5h1m7 0h1m3 0h1M0 6h1m10 0h1m3 0h1M0 7h2m9 0h1m3 0h1M1 8h3m7 0h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h1m3 0h1m-5 1h4M4 15h8" /><path stroke="#00f" d="M3 1h1m1 1h1M0 4h1M0 5h3M1 6h2M2 7h1m3 3h2" /><path stroke="gray" d="M9 1h6m-1 1h1M5 3h6m3 0h1m-5 1h1m1 0h1m1 0h1M5 5h1m4 0h1m3 0h1M5 6h4m1 0h1m1 0h1m1 0h1m-5 1h1m3 0h1M5 8h4m1 0h1m3 0h1M3 9h1m6 0h1m3 0h1M3 10h1m6 0h1m1 0h1m1 0h1M3 11h1m6 0h1m1 0h1m1 0h1M3 12h1m1 0h4m1 0h1m3 0h1M3 13h1m1 0h1m2 0h1m1 0h1m1 0h3M3 14h1m6 0h1m-8 1h1" /><path stroke="#0f0" d="M1 2h2M1 3h2m9 0h1M8 5h1" /><path stroke="silver" d="M8 2h6m-1 1h1M4 4h6m3 0h1M4 5h1m4 0h1m2 0h2M4 6h1m4 0h1m3 0h1M4 7h6m3 0h1M4 8h1m4 0h1m3 0h1M4 9h1m4 0h1m3 0h1M4 10h1m4 0h1m3 0h1M4 11h1m4 0h1m3 0h1M4 12h1m4 0h1m2 0h2M4 13h1m4 0h1m-6 1h6" /><path stroke="navy" d="M4 3h1M3 4h1M3 6h1M3 7h1m8 1h1m-8 2h1m2 0h1" /><path stroke="#fff" d="M6 5h1m5 2h1M5 9h4m3 0h1m-8 2h4m-3 2h2" /><path stroke="red" d="M7 5h1" /></svg>;

export const svrworldData = {
  '16x16_4': Svrworld_16x16_4
};

export interface SvrworldProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Svrworld: React.FC<SvrworldProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = svrworldData[variant];

  return <Svg {...rest} />;
};
