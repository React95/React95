import React from 'react';
import type { SVGProps } from "react";

const Internat151_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="navy" d="M0 0h13M0 1h13M0 2h13M0 3h5m3 0h5M0 4h4m1 0h3m1 0h4M0 5h4m1 0h3m1 0h4M0 6h7m1 0h5M0 7h6m1 0h6M0 8h6m1 0h6M0 9h13M0 10h6m1 0h6M0 11h13M0 12h13" /><path stroke="gray" d="M13 2h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2M1 13h14M1 14h14" /><path stroke="#fff" d="M5 3h3M4 4h1m3 0h1M4 5h1m3 0h1M7 6h1M6 7h1M6 8h1m-1 2h1" /><path stroke="teal" d="M15 15h1" /></svg>;

export const internat151Data = {
  '16x16_4': Internat151_16x16_4
};

export interface Internat151Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Internat151: React.FC<Internat151Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = internat151Data[variant];

  return <Svg {...rest} />;
};
