import React from 'react';
import type { SVGProps } from "react";

const Lights102_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="gray" d="M3 3h13M2 4h12M1 5h12m1 0h1M0 6h1m12 0h2m-2 1h2m-2 1h2m-2 1h2m-2 1h1" /><path stroke="silver" d="M14 4h1m-2 1h1M1 6h12" /><path stroke="#000" d="M15 4h1m-1 1h1m-1 1h1M0 7h13m2 0h1M0 8h2m3 0h3m3 0h2m2 0h1M0 9h2m3 0h3m3 0h2m2 0h1M0 10h2m3 0h3m3 0h2m1 0h1M0 11h14M1 12h12" /><path stroke="maroon" d="M2 8h1m1 0h1m-3 2h1m1 0h1" /><path stroke="red" d="M3 8h1M2 9h3m-2 1h1" /><path stroke="green" d="M8 8h1m1 0h1m-3 2h1m1 0h1" /><path stroke="#0f0" d="M9 8h1M8 9h3m-2 1h1" /></svg>;

export const lights102Data = {
  '16x16_4': Lights102_16x16_4
};

export interface Lights102Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Lights102: React.FC<Lights102Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = lights102Data[variant];

  return <Svg {...rest} />;
};
