import React from 'react';
import type { SVGProps } from "react";

const Conf611_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 1h2M6 2h1m2 0h1m4 0h1M5 3h1m4 0h1m2 0h1M4 4h1m2 0h1m2 0h1m1 0h1M2 5h2m3 0h2m1 0h1M1 6h1m5 0h1m1 0h2m1 0h4M1 7h1m5 0h2m1 0h1M2 8h2m3 0h1m2 0h1m1 0h1M4 9h1m5 0h1m2 0h1m-9 1h1m3 0h1m4 0h1m-9 1h1m2 0h1m-3 1h2" /><path stroke="silver" d="M9 1h1M8 3h1M8 4h1M8 6h1M8 8h1M8 9h1m0 3h1" /><path stroke="#ff0" d="M7 2h1M6 3h1M5 4h1M4 5h1m1 0h1M2 6h1m2 0h1M2 7h1m1 0h1m1 0h1M5 8h1m0 1h1m0 1h1" /><path stroke="olive" d="M8 2h1M3 6h1M3 7h1m0 1h1m0 1h1m0 1h1m1 0h1m-2 1h2" /><path stroke="gray" d="M7 3h1M7 9h1" /><path stroke="#fff" d="M9 3h1M6 4h1m2 0h1M5 5h1m3 0h1M4 6h1m1 0h1M5 7h1m3 0h1M6 8h1m2 0h1M9 9h1" /></svg>;

export const conf611Data = {
  '16x16_4': Conf611_16x16_4
};

export interface Conf611Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf611Component = ({
  variant = '16x16_4',
  ...rest
}: Conf611Props) => {
  const Svg = conf611Data[variant];

  return <Svg {...rest} />;
};

export const Conf611 = React.memo(Conf611Component);
Conf611.displayName = 'Conf611';
