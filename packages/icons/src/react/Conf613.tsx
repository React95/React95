import React from 'react';
import type { SVGProps } from "react";

const Conf613_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M4 1h8M2 2h2m8 0h2M1 3h1m12 0h1M0 4h1m3 0h8m3 0h1M0 5h1m3 0h1m6 0h1m3 0h1M1 6h3m9 0h2M2 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m0 1h7" /><path stroke="#ff0" d="M4 2h1m1 0h1m1 0h1m1 0h1M3 3h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 4h1m9 0h1m1 0h1M1 5h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1M4 6h1M3 7h1M2 8h1m1 0h1m1 0h1m-5 2h1m1 0h1m1 0h1m-4 1h1m1 0h1m1 0h1" /><path stroke="#fff" d="M5 2h1m1 0h1m1 0h1m1 0h1M2 3h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M1 4h1m1 0h1m9 0h1M2 5h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1M5 6h1m1 0h1m1 0h1M4 7h1m1 0h1M3 8h1m1 0h1m1 0h1m1 0h2m1 0h2m-4 1h3M3 10h1m1 0h1m4 0h3M2 11h1m1 0h1m1 0h1m2 0h2m1 0h2" /><path stroke="#00f" d="M6 6h1m1 0h1M5 7h1m1 0h1" /><path stroke="red" d="M10 6h3M8 7h7M8 8h1m2 0h1m2 0h1M7 9h3m3 0h3m-9 1h3m3 0h3m-8 1h1m2 0h1m2 0h1m-6 1h6m-5 1h3" /><path stroke="gray" d="M2 9h5" /></svg>;

export const conf613Data = {
  '16x16_4': Conf613_16x16_4
};

export interface Conf613Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf613Component = ({
  variant = '16x16_4',
  ...rest
}: Conf613Props) => {
  const Svg = conf613Data[variant];

  return <Svg {...rest} />;
};

export const Conf613 = React.memo(Conf613Component);
Conf613.displayName = 'Conf613';
