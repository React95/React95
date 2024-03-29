import React from 'react';
import type { SVGProps } from "react";

const Shdocvw274_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 1h4M3 2h2m4 0h2M2 3h1M1 4h1M1 5h1M0 6h1M0 7h1M0 8h1m11 0h1m1 0h1M0 9h1m12 0h1M0 10h1m12 1h1m-4 1h1m2 0h1m-4 1h1m1 0h1m1 0h1" /><path stroke="silver" d="M5 2h1M4 3h1M3 4h1M2 5h1M1 6h1m1 0h1m6 1h1m2 0h2M3 8h1m6 0h1M2 9h1m1 0h2m5 0h2m-1 1h1m-2 1h1m2 1h1" /><path stroke="#00f" d="M6 2h1M6 3h1M6 5h2M5 6h4M4 7h1m4 0h1M9 8h1m0 1h1m-9 1h2m5 0h2M1 11h1m1 0h3m2 0h1m-7 1h6m-5 1h2m3 0h1" /><path stroke="teal" d="M7 2h2M4 4h1m4 1h1M9 6h1M1 8h1M1 9h1m7 0h1" /><path stroke="#fff" d="M3 3h1m1 0h1M2 4h1m0 1h1M2 6h1m1 0h1M1 7h3m7 0h2M2 8h1m1 0h1m6 0h1M3 9h1m0 1h1m7 1h1m-2 1h2m-2 1h1" /><path stroke="green" d="M7 3h4M5 4h7M4 5h2m2 0h1M5 7h4M5 8h4M6 9h3m-8 1h1m3 0h3m-6 1h1m3 0h2" /><path stroke="navy" d="M11 3h1m-4 7h1m2 0h1m-3 1h2M1 12h1m6 0h2m-8 1h1m2 0h3m1 0h1m-7 1h6" /><path stroke="#000" d="M12 4h1m-3 2h6m-1 1h1m-3 1h1m1 0h1m-2 1h1m-2 1h1m0 1h1m0 1h1m-3 1h1m1 0h1m-7 1h1m-5 1h4m1 0h6" /><path stroke="red" d="M10 5h1m2 0h2m-5 9h1m2 0h2" /><path stroke="#f0f" d="M11 5h2m-2 9h2" /><path stroke="maroon" d="M15 5h1m-1 9h1" /></svg>;

export const shdocvw274Data = {
  '16x16_4': Shdocvw274_16x16_4
};

export interface Shdocvw274Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Shdocvw274: React.FC<Shdocvw274Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = shdocvw274Data[variant];

  return <Svg {...rest} />;
};
