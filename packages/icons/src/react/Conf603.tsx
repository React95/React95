import React from 'react';
import type { SVGProps } from "react";

const Conf603_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M9 1h4M8 2h1m4 0h1M2 3h3m3 0h1m4 0h1M0 4h3m2 0h1m1 0h2m4 0h1M0 5h1m1 0h1m3 0h1m1 0h1m4 0h1M0 6h1m1 0h1m1 0h1m1 0h2m1 0h5M0 7h1m1 0h1m2 0h2m1 0h1m1 0h1m1 0h1m1 0h1M0 8h1m1 0h1m1 0h1m1 0h2m2 0h3m2 0h1M0 9h1m1 0h1m2 0h2m3 0h1m1 0h1M0 10h1m1 0h3m1 0h1m1 0h5M0 11h1m4 0h3m4 0h1M0 12h13" /><path stroke="#0ff" d="M9 2h1m0 1h3m-3 1h3m-3 1h3" /><path stroke="#fff" d="M10 2h3M9 3h1M3 4h2m4 0h1M1 5h1m1 0h3m1 0h1m1 0h1M1 6h1m1 0h1m1 0h1m2 0h1M1 7h1m1 0h2m2 0h1m1 0h1m1 0h1M1 8h1m1 0h1m1 0h1m2 0h2M1 9h1m1 0h2m2 0h3m-9 1h1m3 0h1m1 0h1m-7 1h4m3 0h4" /><path stroke="gray" d="M14 6h1m0 1h1" /><path stroke="#ff0" d="M11 9h1" /></svg>;

export const conf603Data = {
  '16x16_4': Conf603_16x16_4
};

export interface Conf603Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf603Component = ({
  variant = '16x16_4',
  ...rest
}: Conf603Props) => {
  const Svg = conf603Data[variant];

  return <Svg {...rest} />;
};

export const Conf603 = React.memo(Conf603Component);
Conf603.displayName = 'Conf603';
