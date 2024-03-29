import React from 'react';
import type { SVGProps } from "react";

const Shdocvw261_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M5 0h3M3 1h2m3 0h2M2 2h1M1 3h1m7 0h1M1 4h1M0 5h1M0 6h1M0 7h1m0 1h1M1 9h1m0 1h1m0 1h1" /><path stroke="silver" d="M5 1h1M4 2h1M3 3h1m2 0h1M2 4h1m3 0h1M1 5h1m1 0h1m2 0h1M2 6h1m3 0h1m2 0h1M5 7h2m2 0h1M6 8h1m2 0h1M6 9h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1" /><path stroke="#fff" d="M6 1h1M3 2h1m1 0h1m3 0h1M2 3h1m0 1h1m5 0h1M2 5h1m9 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M7 1h1M6 2h2M7 3h1M7 4h1m2 0h1m2 0h1M7 5h1m1 0h2M7 6h1m2 0h1m4 0h1M7 7h1m2 0h1m4 0h1M7 8h2m1 0h1m4 0h1M7 9h1m2 0h1m1 0h2m1 0h1m-9 1h1m2 0h2m2 0h2M4 11h1m2 0h1m2 0h2m-7 1h1m1 0h1m2 0h1m-4 1h1m2 0h1m-4 1h1m2 0h1" /><path stroke="green" d="M8 2h1M5 3h1M4 4h1m0 1h1M1 7h1m0 1h1" /><path stroke="maroon" d="M10 2h2M8 3h1m3 0h2" /><path stroke="teal" d="M4 3h1M1 6h1m2 0h2M2 9h1" /><path stroke="#f0f" d="M10 3h1" /><path stroke="red" d="M11 3h1M8 4h1m2 0h2M8 5h1m2 0h1M8 6h1M8 7h1" /><path stroke="#00f" d="M5 4h1M4 5h1M3 6h1M2 7h3M3 8h3M3 9h3m-3 1h2" /><path stroke="olive" d="M12 5h2m-3 1h1m2 0h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#ff0" d="M13 6h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h1" /><path stroke="navy" d="M5 10h1m-1 1h1" /></svg>;

export const shdocvw261Data = {
  '16x16_4': Shdocvw261_16x16_4
};

export interface Shdocvw261Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Shdocvw261: React.FC<Shdocvw261Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = shdocvw261Data[variant];

  return <Svg {...rest} />;
};
