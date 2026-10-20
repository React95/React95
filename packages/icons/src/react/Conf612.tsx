import React from 'react';
import type { SVGProps } from "react";

const Conf612_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M6 1h2M5 2h1m2 0h1M4 3h1m4 0h1M3 4h1m2 0h1m2 0h1M1 5h2m3 0h2m1 0h6M0 6h1m5 0h1m1 0h2m4 0h1M0 7h1m5 0h2m1 0h1m4 0h1M1 8h2m3 0h1m2 0h1m4 0h1M3 9h1m5 0h1m4 0h1M4 10h1m3 0h1m5 0h1M4 11h2m2 0h1m5 0h1M4 12h1m1 0h2m6 0h1M4 13h1m9 0h1M4 14h11" /><path stroke="#ff0" d="M6 2h1M5 3h1M4 4h1M3 5h1m1 0h1M1 6h1m2 0h1M1 7h1m1 0h1m1 0h1M4 8h1m0 1h1m0 1h1" /><path stroke="olive" d="M7 2h1M2 6h1M2 7h1m0 1h1m0 1h1m0 1h1m1 0h1m-2 1h2" /><path stroke="gray" d="M6 3h1M6 9h1m3 0h3m-4 2h4" /><path stroke="silver" d="M7 3h1M7 4h1M7 6h1M7 8h1M7 9h1" /><path stroke="#fff" d="M8 3h1M5 4h1m2 0h1M4 5h1m3 0h1M3 6h1m1 0h1M4 7h1m3 0h1M5 8h1m2 0h1m1 0h4M8 9h1m4 0h1m-5 1h5m-1 1h1m-9 1h1m2 0h6m-9 1h9" /><path stroke="navy" d="M10 6h4m-4 1h4" /></svg>;

export const conf612Data = {
  '16x16_4': Conf612_16x16_4
};

export interface Conf612Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf612Component = ({
  variant = '16x16_4',
  ...rest
}: Conf612Props) => {
  const Svg = conf612Data[variant];

  return <Svg {...rest} />;
};

export const Conf612 = React.memo(Conf612Component);
Conf612.displayName = 'Conf612';
